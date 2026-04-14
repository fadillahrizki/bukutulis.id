import SimpleCrud from "@/components/SimpleCrud.vue";

const addFields = [
    {name: 'id_kategori', label: 'ID Kategori', type: 'text'},
    {name: 'nama_kategori', label: 'Nama Kategori', type: 'text'},
    {name: 'keterangan', label: 'Keterangan', type: 'text'},
    {name: 'status', label: 'Status', defaultValue: 1, type: 'select', options: [{label: 'Aktif', value: 1}, {label: 'Tidak Aktif', value: 0}]},
]


export default {
    path: 'category',
    component: SimpleCrud,
    config: {
        endpoint: '/kategori',
        id_field: 'id_kategori',
        list: {
            title: 'List Kategori',
            columns: [
                {
                    key: 'id_kategori',
                    label: 'ID Kategori',
                },
                {
                    key: 'nama_kategori',
                    label: 'Nama Kategori',
                },
                {
                    key: 'keterangan',
                    label: 'Keterangan',
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
            title: 'Tambah Kategori',
            fields: addFields
        },
        edit: {
            title: 'Edit Kategori',
            fields: addFields
        }
    }
}