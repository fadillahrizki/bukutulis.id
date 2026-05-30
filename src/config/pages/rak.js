import SimpleCrud from "@/components/SimpleCrud.vue";

const fields = [
    {
        name: 'kode_lokasi',
        label: 'Kode Lokasi',
        type: 'text'
    },
    {
        name: 'kode_sub_lokasi',
        label: 'Kode Sub Lokasi',
        type: 'text'
    },
    {
        name: 'no_urut',
        label: 'No. Urut',
        type: 'text'
    },
    {
        name: 'keterangan',
        label: 'Keterangan',
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
    path: 'rak',
    component: SimpleCrud,
    config: {
        endpoint: '/rak',
        id_field: 'kode_lokasi',
        list: {
            title: 'List Lokasi',
            columns: [
                {
                    key: 'kode_lokasi',
                    label: 'Kode Lokasi'
                },
                {
                    key: 'kode_sub_lokasi',
                    label: 'Kode Sub Lokasi'
                },
                {
                    key: 'no_urut',
                    label: 'No. Urut'
                },
                {
                    key: 'keterangan',
                    label: 'Keterangan'
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
            title: 'Tambah Lokasi',
            fields
        },
        edit: {
            title: 'Edit Lokasi',
            fields
        }
    }
};