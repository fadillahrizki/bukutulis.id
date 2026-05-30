import SimpleCrud from "@/components/SimpleCrud.vue";

const fields = [
    {
        name: 'id_grup_user',
        label: 'ID Grup User',
        type: 'text'
    },
    {
        name: 'id_menu_user',
        label: 'ID Menu User',
        type: 'text'
    },
    {
        name: 'akses',
        label: 'Akses',
        defaultValue: 1,
        type: 'select',
        options: [
            { label: 'Ya', value: 1 },
            { label: 'Tidak', value: 0 }
        ]
    }
];

export default {
    path: 'akses',
    component: SimpleCrud,
    config: {
        endpoint: '/akses',
        id_field: ['id_grup_user', 'id_menu_user'], // jika mendukung composite key
        list: {
            title: 'List Hak Akses',
            columns: [
                {
                    key: 'id_grup_user',
                    label: 'ID Grup User'
                },
                {
                    key: 'id_menu_user',
                    label: 'ID Menu User'
                },
                {
                    key: 'akses',
                    label: 'Akses',
                    type: 'status-badge',
                    badge: {
                        color: {
                            '1': 'success',
                            '0': 'danger'
                        },
                        label: {
                            '1': 'Ya',
                            '0': 'Tidak'
                        }
                    }
                }
            ]
        },
        add: {
            title: 'Tambah Hak Akses',
            fields
        },
        edit: {
            title: 'Edit Hak Akses',
            fields
        }
    }
};