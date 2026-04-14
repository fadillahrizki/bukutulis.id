import SimpleCrud from "@/components/SimpleCrud.vue";

const addFields = [
    {name: 'id_jenis_cust', label: 'ID Jenis Customer', type: 'text'},
    {name: 'nama_jenis_cust', label: 'Nama Jenis Customer', type: 'text'},
    {name: 'keterangan', label: 'Keterangan', type: 'text'},
    {name: 'status', label: 'Status', defaultValue: 1, type: 'select', options: [{label: 'Aktif', value: 1}, {label: 'Tidak Aktif', value: 0}]},
]


export default {
    path: 'jeniscust',
    component: SimpleCrud,
    config: {
        endpoint: '/jeniscust',
        id_field: 'id_jenis_cust',
        list: {
            title: 'List jenis_cust',
            columns: [
                {
                    key: 'id_jenis_cust',
                    label: 'ID Jenis Customer',
                },
                {
                    key: 'nama_jenis_cust',
                    label: 'Nama Jenis Customer',
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
            title: 'Tambah Jenis Customer',
            fields: addFields
        },
        edit: {
            title: 'Edit Jenis Customer',
            fields: addFields
        }
    }
}