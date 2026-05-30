import SimpleCrud from "@/components/SimpleCrud.vue";

const fields = [
    {
        name: 'id_grup_user',
        label: 'ID Grup User',
        type: 'text'
    },
    {
        name: 'nama_grup_user',
        label: 'Nama Grup User',
        type: 'text'
    },
    {
        name: 'status',
        label: 'Status',
        defaultValue: 1,
        type: 'select',
        options: [
            { label: 'Aktif', value: 1 },
            { label: 'Tidak Aktif', value: 0 }
        ]
    }
];

export default {
    path: 'grupuser',
    component: SimpleCrud,
    config: {
        endpoint: '/grupuser',
        id_field: 'id_grup_user',
        list: {
            title: 'List Grup User',
            columns: [
                {
                    key: 'id_grup_user',
                    label: 'ID Grup User'
                },
                {
                    key: 'nama_grup_user',
                    label: 'Nama Grup User'
                },
                {
                    key: 'status',
                    label: 'Status',
                    type: 'status-badge',
                    badge: {
                        color: {
                            '1': 'success',
                            '0': 'danger'
                        },
                        label: {
                            '1': 'Aktif',
                            '0': 'Tidak Aktif'
                        }
                    }
                }
            ]
        },
        add: {
            title: 'Tambah Grup User',
            fields
        },
        edit: {
            title: 'Edit Grup User',
            fields
        }
    }
};