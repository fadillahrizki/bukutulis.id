<script setup>
import { onBeforeUnmount, onMounted, ref, watch, nextTick } from "vue";
import { useId } from "vue";
import CrudService from "@/libraries/services/crud.service";
import { getNested } from "@/libraries/utility";

const props = defineProps({
  modelValue: [String, Number],
  formData: { type: Object, default: () => ({}) },
  field: Object,
});

const elId = props.field.name + "-" + useId();
const emit = defineEmits(["update:modelValue"]);
const selectRef = ref(null);

const resetSelect = () => {
  const $el = $(selectRef.value);
  $el.val(null).trigger("change");
};

defineExpose({ selectRef, resetSelect });

/*
|--------------------------------------------------------------------------
| Watch modelValue (untuk init edit form)
|--------------------------------------------------------------------------
*/
watch(
  () => props.modelValue,
  async (val) => {
    const $el = $(selectRef.value);
    if (!$el.data("select2")) return;

    if (!val) {
      $el.val(null).trigger("change.select2");
      return;
    }

    // jika ada dependsOn, gunakan composite value
    if (props.field.ajax?.dependsOn) {
      const parent = props.formData[props.field.ajax.dependsOn];
      const composite = parent + ":" + val;
      $el.val(composite).trigger("change.select2");
    } else if(props.modelValue && props.field.ajax.initList) {
      const listUrl = props.field.ajax.initList.url + '/' + props.formData[props.field.ajax.initList.key] 
      const {data} = await CrudService.get(listUrl) 
      $el.append(`<option value="${data.data[props.field.ajax.initList.response.id]}">${getNested(data.data, props.field.ajax.initList.response.text)}</option>`)
      $el.val(val).trigger('change.select2')
    } else {
      $el.val(val).trigger("change.select2");
    }
  }
);

/*
|--------------------------------------------------------------------------
| Watch dependsOn (ref_name berubah)
|--------------------------------------------------------------------------
*/
if (props.field.ajax?.dependsOn) {
  watch(
    () => props.formData[props.field.ajax.dependsOn],
    (val) => {
      const $el = $(selectRef.value);
      if (!$el.data("select2")) return;

      // reset value
      emit("update:modelValue", null);
      $el.val(null).trigger("change");

      // disable jika parent kosong
      $el.prop("disabled", !val);
    }
  );
}

/*
|--------------------------------------------------------------------------
| On Mounted
|--------------------------------------------------------------------------
*/
onMounted(() => {
  const $el = $(selectRef.value);

  const ajax = {};

  if (props.field.ajax) {
    /*
    |--------------------------------------------------------------------------
    | Dynamic URL (dependsOn)
    |--------------------------------------------------------------------------
    */
    ajax.url = function () {
      if (props.field.ajax.dependsOn) {
        const parent = props.formData[props.field.ajax.dependsOn]
        if (!parent) return ""

        let finalUrl = props.field.ajax.url + "/" + parent

        // 🔥 Tambahan logic additionalParams
        if (props.field.ajax.additionalParams) {
          const extra = props.field.ajax.additionalParams[parent]

          if (extra) {
            const separator = finalUrl.includes("?") ? "&" : "?"
            finalUrl += separator + extra
          }
        }

        return finalUrl
      }

      return props.field.ajax.url
    }

    /*
    |--------------------------------------------------------------------------
    | Query Data
    |--------------------------------------------------------------------------
    */
    ajax.data = function (params) {
      if (
        props.field.ajax.dependsOn &&
        !props.formData[props.field.ajax.dependsOn]
      ) {
        return {};
      }

      let query = {};

      query[props.field.ajax.term] = {
        value: params.term,
      };

      return query;
    };

    /*
    |--------------------------------------------------------------------------
    | Process Result (Composite ID)
    |--------------------------------------------------------------------------
    */
    ajax.processResults = function (data) {
      const parent = props.field.ajax.dependsOn
        ? props.formData[props.field.ajax.dependsOn]
        : null;

      return {
        results: [
          { id: "", text: "" },
          ...data.data.map((d) => {
            const originalId = d[props.field.ajax.response.id];

            return {
              id: parent ? parent + ":" + originalId : originalId,
              text: getNested(d, props.field.ajax.response.text),
              data: d,
            };
          }),
        ],
      };
    };

    if (props.field.ajax.useBearer) {
      ajax.headers = {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      };
    }
  }

  const select2Param = {
    placeholder: props.field.placeholder ?? "Choose...",
    width: "100%",
    theme: "bootstrap-5",
    ajax: ajax ?? null,
    dropdownParent: props.field.dropdownParent
      ? $(props.field.dropdownParent)
      : null,
    allowClear: true,
  };

  $el.select2(select2Param);

  /*
  |--------------------------------------------------------------------------
  | Disable awal jika dependsOn kosong
  |--------------------------------------------------------------------------
  */
  if (props.field.ajax?.dependsOn) {
    const parentVal = props.formData[props.field.ajax.dependsOn];
    $el.prop("disabled", !parentVal);
  }

  /*
  |--------------------------------------------------------------------------
  | Change Event
  |--------------------------------------------------------------------------
  */
  $el.on("change", () => {
    const val = $el.val();

    if (val && typeof val === "string" && val.includes(":")) {
      const [type, id] = val.split(":");

      // pastikan ref_name sinkron
      props.formData[props.field.ajax.dependsOn] = type;

      emit("update:modelValue", id);
    } else {
      emit("update:modelValue", val);
    }
  });

  /*
  |--------------------------------------------------------------------------
  | Select Event (optional event handler)
  |--------------------------------------------------------------------------
  */
  $el.on("select2:select", function (e) {
    const item = e.params.data;

    if (props.field.events?.change) {
      const change = props.field.events.change;
      const fieldToSet = change.set;
      const valueField = change.value;

      props.formData[fieldToSet] = item.data[valueField];
    }
  });
});

/*
|--------------------------------------------------------------------------
| Destroy
|--------------------------------------------------------------------------
*/
onBeforeUnmount(() => {
  $(selectRef.value).select2("destroy");
});
</script>

<template>
  <div class="mb-2">
    <label v-if="field?.label" :for="elId" class="form-label">
      {{ field.label }}
    </label>

    <select
      ref="selectRef"
      :id="elId"
      v-bind="field?.props ?? {}"
      :required="field?.required"
      class="form-select"
    >
      <option value="">
        {{ field?.placeholder || "Choose..." }}
      </option>

      <option
        v-for="opt in field?.options || []"
        :key="opt.value"
        :value="opt.value"
      >
        {{ opt.label }}
      </option>
    </select>
  </div>
</template>