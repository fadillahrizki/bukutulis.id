<script setup>
import { onMounted, onUpdated } from 'vue';

function init(){
    $('.list-filter-select').select2({
        minimumResultsForSearch: -1,
        width: '100%',
    })
}

onUpdated( () => {
    init()
})

onMounted( () => {
    init()
})
</script>
<template>
    <div class="table-top">
        <div class="search-set">
            <div class="search-input">
                <a href="" class="btn btn-searchset"><i data-feather="search" class="feather-search"></i></a>
            </div>
        </div>
        <div class="search-path d-flex gap-2">
            <!-- <div class="input-blocks m-0">
                <select class="list-filter-select">
                    <option>Choose Category</option>
                    <option>Laptop</option>
                    <option>Electronics</option>
                    <option>Shoe</option>
                </select>
            </div>
            <div class="input-blocks m-0">
                <div class="input-groupicon">
                    <i data-feather="calendar" class="info-img"></i>
                    <input type="text" class="datetimepicker" placeholder="Choose Date">
                </div>
            </div> -->
            <div class="input-blocks m-0" style="width: 150px;">
                <select class="list-filter-select">
                    <option>Pilih Status</option>
                    <option value="1">Aktif</option>
                    <option value="0">Tidak Aktif</option>
                </select>
            </div>
            <div class="input-blocks m-0">
                <a class="btn btn-filters ms-auto"> <i data-feather="search" class="feather-search"></i> Search</a>
            </div>
        </div>
    </div>
</template>