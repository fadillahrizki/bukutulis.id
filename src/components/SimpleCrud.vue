<script setup>
import ListContent from '@/components/PageList/ListContent.vue';
import { usePageStore } from '@/stores/page.js';
import inputComponents from '@/libs/input-components.js';
import { useCrudStore } from '@/stores/crud';
import { ref, watch } from 'vue';

const pageStore = usePageStore()
const crudStore = useCrudStore()
const currentPage = pageStore.getCurrentPage()
const createForm = ref({})
const editForm = ref({})

const submitCreateForm = async () => {
    try {
        await crudStore.create(currentPage.config.endpoint + '/add', createForm.value)
        await crudStore.fetchAll(currentPage.config.endpoint + '/list')

        $('#add-modal').modal('hide')

        Swal.fire({
            type: "success",
            title: "Berhasil!",
            text: "Data berhasil disimpan.",
            confirmButtonClass: "btn btn-success",
        });
    } catch (err) {
        console.error('Failed', err)
    }
}

const submitEditForm = async () => {
    try {
        await crudStore.create(currentPage.config.endpoint + '/edit', editForm.value)
        await crudStore.fetchAll(currentPage.config.endpoint + '/list')

        $('#edit-modal').modal('hide')

        Swal.fire({
            type: "success",
            title: "Berhasil!",
            text: "Data berhasil diperbaharui.",
            confirmButtonClass: "btn btn-success",
        });
    } catch (err) {
        console.error('Failed', err)
    }
}

watch(
    () => crudStore.item,
    (newVal, oldVal) => {
        editForm.value = newVal
    }
)

watch(
    () => crudStore.openCreateModal,
    (newVal, oldVal) => {
        console.log(newVal)
        if(newVal)
        {
            currentPage.config.add.fields.forEach(f => {
                if(f.hasOwnProperty('defaultValue'))
                {
                    if(f.defaultFrom && f.defaultFrom == 'queryParam')
                    {
                        createForm.value[f.name] = route.query['filters['+f.defaultValue+']']
                    }
                    else
                    {
                        createForm.value[f.name] = f.defaultValue
                    }
                }
            })

            crudStore.openCreateModal = false
        }
    }
)

</script>

<template>
    <list-content />
    <!-- /Main Wrapper -->

    <!-- Add Category -->
    <div class="modal fade" id="add-modal">
      <div class="modal-dialog modal-dialog-centered custom-modal-two">
        <div class="modal-content">
          <div class="page-wrapper-new p-0">
            <div class="content">
              <div class="modal-header border-0 custom-modal-header">
                <div class="page-title">
                  <h4>{{currentPage.config.add.title}}</h4>
                </div>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body custom-modal-body">
                <form method="post" @submit.prevent="submitCreateForm">
                    <template v-for="field in currentPage.config.add.fields">
                        <component :is="inputComponents[field.type]" v-model="createForm[field.name]" :field="field" class="col-12" :class="field.className ?? ''" />
                    </template>
                    <div class="modal-footer-btn">
                        <button type="button" class="btn btn-cancel me-2" data-bs-dismiss="modal">Batal</button>
                        <button type="submit" class="btn btn-submit">Submit</button>
                    </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Add Category -->

    <!-- Edit Category -->
    <div class="modal fade" id="edit-modal">
      <div class="modal-dialog modal-dialog-centered custom-modal-two">
        <div class="modal-content">
          <div class="page-wrapper-new p-0">
            <div class="content">
              <div class="modal-header border-0 custom-modal-header">
                <div class="page-title">
                  <h4>{{currentPage.config.edit.title}}</h4>
                </div>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body custom-modal-body">
                <form method="post" @submit.prevent="submitEditForm">
                    <template v-for="field in currentPage.config.edit.fields">
                        <component :is="inputComponents[field.type]" v-model="editForm[field.name]" :field="field" class="col-12" :class="field.className ?? ''" />
                    </template>
                    <div class="modal-footer-btn">
                        <button type="button" class="btn btn-cancel me-2" data-bs-dismiss="modal">Batal</button>
                        <button type="submit" class="btn btn-submit">Submit</button>
                    </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
</template>