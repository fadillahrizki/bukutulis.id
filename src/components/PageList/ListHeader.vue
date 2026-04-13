<script setup>
import { usePageStore } from '@/stores/page.js';
import { useCrudStore } from '@/stores/crud';

const pageStore = usePageStore()
const crudStore = useCrudStore()

const handleOpenCreateModal = () => {
    crudStore.openCreateModal = true
}
</script>
<template>
    <div class="page-header">
        <div class="add-item d-flex">
            <div class="page-title">
                <h4>{{pageStore.getCurrentPage().config.list.title}}</h4>
                <h6>{{pageStore.getCurrentPage().config.list.subtitle ?? ''}}</h6>
            </div>
        </div>
        <!-- <ul class="table-top-head">
            <li>
                <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf"><img src="/assets/img/icons/pdf.svg" alt="img"></a>
            </li>
            <li>
                <a data-bs-toggle="tooltip" data-bs-placement="top" title="Excel">
                    <img src="/assets/img/icons/excel.svg" alt="img">
                </a>
            </li>
            <li>
                <a data-bs-toggle="tooltip" data-bs-placement="top" title="Print">
                    <i data-feather="printer" class="feather-rotate-ccw"></i>
                </a>
            </li>
            <li>
                <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh">
                    <i data-feather="rotate-ccw" class="feather-rotate-ccw"></i>
                </a>
            </li>
            <li>
                <a data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" id="collapse-header">
                    <i data-feather="chevron-up" class="feather-chevron-up"></i>
                </a>
            </li>
        </ul> -->
        <div class="page-btn">
            <a href="#" class="btn btn-added" data-bs-toggle="modal" data-bs-target="#add-modal" @click="handleOpenCreateModal">
                <i data-feather="plus-circle" class="me-2"></i> {{pageStore.getCurrentPage().config.add.title}}
            </a>
        </div>
    </div>
</template>
