import SimpleCrud from "@/components/SimpleCrud.vue";

const addFields = [
    {name: 'id_bank', label: 'ID Bank', type: 'text'},
    {name: 'nama_bank', label: 'Nama Bank', type: 'text'},
    {name: 'keterangan', label: 'Keterangan', type: 'text'},
    {name: 'status', label: 'Status', defaultValue: 1, type: 'select', options: [{label: 'Aktif', value: 1}, {label: 'Tidak Aktif', value: 0}]},
]


export default {
    path: 'bank',
    component: SimpleCrud,
    config: {
        endpoint: '/bank',
        id_field: 'id_bank',
        list: {
            title: 'List Bank',
            columns: [
                {
                    key: 'id_bank',
                    label: 'ID Bank',
                },
                {
                    key: 'nama_bank',
                    label: 'Nama Bank',
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
            title: 'Tambah Bank',
            fields: addFields
        },
        edit: {
            title: 'Edit Bank',
            fields: addFields
        }
    }
}