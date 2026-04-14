import SimpleCrud from "@/components/SimpleCrud.vue";

const addFields = [
    {name: 'kode_satuan', label: 'Kode Satuan', type: 'text'},
    {name: 'nama_satuan', label: 'Nama Satuan', type: 'text'},
    {name: 'status', label: 'Status', defaultValue: 1, type: 'select', options: [{label: 'Aktif', value: 1}, {label: 'Tidak Aktif', value: 0}]},
]


export default {
    path: 'satuan',
    component: SimpleCrud,
    config: {
        endpoint: '/kodesatuan',
        id_field: 'kode_satuan',
        list: {
            title: 'List satuan',
            columns: [
                {
                    key: 'kode_satuan',
                    label: 'Kode Satuan',
                },
                {
                    key: 'nama_satuan',
                    label: 'Nama Satuan',
                },
                {
                    key: 'status',
                    label: 'Status',
                    type: "status-badge", 
                    badge: {
                        color:{'1': 'success', '0': 'danger'}, 
                        label:{'1':'Aktif', '0':'Tidak Aktif'}
                    }
                },
            ]
        },
        add: {
            title: 'Tambah Satuan',
            fields: addFields
        },
        edit: {
            title: 'Edit Satuan',
            fields: addFields
        }
    }
}