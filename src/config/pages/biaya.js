import SimpleCrud from "@/components/SimpleCrud.vue";

const addFields = [
    {name: 'id_biaya', label: 'ID Biaya', type: 'text'},
    {name: 'nama_biaya', label: 'Nama Biaya', type: 'text'},
    {name: 'keterangan', label: 'Keterangan', type: 'text'},
    {name: 'status', label: 'Status', defaultValue: 1, type: 'select', options: [{label: 'Aktif', value: 1}, {label: 'Tidak Aktif', value: 0}]},
]


export default {
    path: 'biaya',
    component: SimpleCrud,
    config: {
        endpoint: '/kodebiaya',
        id_field: 'id_biaya',
        list: {
            title: 'List biaya',
            columns: [
                {
                    key: 'id_biaya',
                    label: 'ID Biaya',
                },
                {
                    key: 'nama_biaya',
                    label: 'Nama Biaya',
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
            title: 'Tambah Biaya',
            fields: addFields
        },
        edit: {
            title: 'Edit Biaya',
            fields: addFields
        }
    }
}