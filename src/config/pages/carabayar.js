import SimpleCrud from "@/components/SimpleCrud.vue";

const addFields = [
    {name: 'id_carabayar', label: 'ID Cara Bayar', type: 'text'},
    {name: 'nama_carabayar', label: 'Nama Cara Bayar', type: 'text'},
    {name: 'keterangan', label: 'Keterangan', type: 'text'},
    {name: 'qris', label: 'QRIS', defaultValue: 1, type: 'select', options: [{label: 'Ya', value: 1}, {label: 'Tidak', value: 0}]},
    {name: 'creditcard', label: 'Credit Card', defaultValue: 0, type: 'select', options: [{label: 'Ya', value: 1}, {label: 'Tidak', value: 0}]},
    {name: 'debitcard', label: 'Debit Card', defaultValue: 0, type: 'select', options: [{label: 'Ya', value: 1}, {label: 'Tidak', value: 0}]},
    {name: 'status', label: 'Status', defaultValue: 1, type: 'select', options: [{label: 'Aktif', value: 1}, {label: 'Tidak Aktif', value: 0}]},
]


export default {
    path: 'carabayar',
    component: SimpleCrud,
    config: {
        endpoint: '/carabayar',
        id_field: 'id_carabayar',
        list: {
            title: 'List satuan',
            columns: [
                {
                    key: 'id_carabayar',
                    label: 'ID Cara Bayar',
                },
                {
                    key: 'nama_carabayar',
                    label: 'Nama Cara Bayar',
                },
                {
                    key: 'keterangan',
                    label: 'Keterangan',
                },
                {
                    key: 'qris',
                    label: 'QRIS',
                    type: "status-badge", 
                    badge: {
                        color:{'1': 'success', '0': 'danger'}, 
                        label:{'1':'Ya', '0':'Tidak'}
                    }
                },
                {
                    key: 'creditcard',
                    label: 'Credit Card',
                    type: "status-badge", 
                    badge: {
                        color:{'1': 'success', '0': 'danger'}, 
                        label:{'1':'Ya', '0':'Tidak'}
                    }
                },
                {
                    key: 'debitcard',
                    label: 'Debit Card',
                    type: "status-badge", 
                    badge: {
                        color:{'1': 'success', '0': 'danger'}, 
                        label:{'1':'Ya', '0':'Tidak'}
                    }
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
            title: 'Tambah Cara Bayar',
            fields: addFields
        },
        edit: {
            title: 'Edit Cara Bayar',
            fields: addFields
        }
    }
}