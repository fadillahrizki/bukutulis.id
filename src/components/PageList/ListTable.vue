<script setup>
import { onMounted } from 'vue';
import ListFilter from './ListFilter.vue';
import { usePageStore } from '@/stores/page';
import { useCrudStore } from '@/stores/crud';
import StatusBadge from '../StatusBadge.vue';

const pageStore = usePageStore()
const crudStore = useCrudStore()

const currentPage = pageStore.getCurrentPage()

async function init(){

    $('.datalist').DataTable({
        bFilter: true,
        sDom: 'fBtlpi',
        ordering: true,
        language: {
            search: ' ',
            sLengthMenu: '_MENU_',
            searchPlaceholder: 'Search',
            info: '_START_ - _END_ of _TOTAL_ items',
            paginate: {
                next: ' <i class=" fa fa-angle-right"></i>',
                previous: '<i class="fa fa-angle-left"></i> ',
            },
        },
        "drawCallback": function(settings) {
            // This replaces data-feather attributes with SVG markup on every page change
            feather.replace();
        },
        initComplete: (settings, json) => {
            $('.dataTables_filter').appendTo('#tableSearch')
            $('.dataTables_filter').appendTo('.search-input')
        },
    })

}

onMounted( async () => {
    await crudStore.fetchAll(currentPage.config.endpoint + '/list')
    init()
})

function confirmDelete(id){
    Swal.fire({
        title: "Apakah anda yakin?",
        text: "Data yang dihapus tidak dapat dikembalikan!",
        type: "warning",
        showCancelButton: !0,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
        confirmButtonClass: "btn btn-primary",
        cancelButtonClass: "btn btn-danger ml-1",
        buttonsStyling: !1,
    }).then(async function (t) {
        const params = {}
        params[currentPage.config.id_field] = id
        if(t.value)
        {
            try {
                await crudStore.remove(currentPage.config.endpoint + '/delete', params)
                Swal.fire({
                    type: "success",
                    title: "Berhasil!",
                    text: "Data berhasil dihapus.",
                    confirmButtonClass: "btn btn-success",
                });
            } catch (error) {
                console.log(error)
            }

            await crudStore.fetchAll(currentPage.config.endpoint + '/list')
        }
        
    });
}

async function loadEditData(id){
    const params = `${currentPage.config.id_field}=${id}`
    await crudStore.fetchOne(currentPage.config.endpoint + '/get?' + params)
}

</script>
<template>
    <!-- /product list -->
    <div class="card table-list-card">
        <div class="card-body">
            
            <ListFilter />

            <div class="table-responsive">
                <table class="table datalist">
                    <thead>
                        <tr>
                            <th class="no-sort">No.</th>
                            <th v-for="col in currentPage.config.list.columns">{{col.label}}</th>
                            <th class="no-sort">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in crudStore.items">
                            <td>
                                {{ index+1 }}
                            </td>
                            <td v-for="col in currentPage.config.list.columns">
                                <StatusBadge v-if="col.type == 'status-badge'" :data="item[col.key]" :map="col.badge" />
                                <span v-else>
                                    {{ item[col.key] }}
                                </span>
                            </td>
                            <td class="action-table-data">
                                <div class="edit-delete-action">
                                    <a class="me-2 p-2" href="#" data-bs-toggle="modal" data-bs-target="#edit-modal" @click="loadEditData(item[currentPage.config.id_field])">
                                        <i data-feather="edit" class="feather-edit"></i>
                                    </a>
                                    <a class="confirm-text p-2" href="javascript:void(0);" @click="confirmDelete(item[currentPage.config.id_field])">
                                        <i data-feather="trash-2" class="feather-trash-2"></i>
                                    </a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <!-- /product list -->
</template>