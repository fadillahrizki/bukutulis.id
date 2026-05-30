import SimpleCrud from "@/components/SimpleCrud.vue";

const fields = [
    {
        name: 'id_cabang',
        label: 'ID Cabang',
        type: 'text'
    },
    {
        name: 'nama_cabang',
        label: 'Nama Cabang',
        type: 'text'
    },
    {
        name: 'alamat1',
        label: 'Alamat 1',
        type: 'text'
    },
    {
        name: 'alamat2',
        label: 'Alamat 2',
        type: 'text'
    },
    {
        name: 'kota',
        label: 'Kota',
        type: 'text'
    },
    {
        name: 'notelp',
        label: 'No. Telepon',
        type: 'text'
    },
    {
        name: 'email',
        label: 'Email',
        type: 'email'
    },
    {
        name: 'ppn',
        label: 'PPN (%)',
        type: 'number'
    },
    {
        name: 'service_tax',
        label: 'Service Tax (%)',
        type: 'number'
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
    path: 'cabang',
    component: SimpleCrud,
    config: {
        endpoint: '/cabang',
        id_field: 'id_cabang',
        list: {
            title: 'List Cabang',
            columns: [
                {
                    key: 'id_cabang',
                    label: 'ID Cabang'
                },
                {
                    key: 'nama_cabang',
                    label: 'Nama Cabang'
                },
                {
                    key: 'kota',
                    label: 'Kota'
                },
                {
                    key: 'notelp',
                    label: 'No. Telepon'
                },
                {
                    key: 'ppn',
                    label: 'PPN (%)'
                },
                {
                    key: 'service_tax',
                    label: 'Service Tax (%)'
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
            title: 'Tambah Cabang',
            fields
        },
        edit: {
            title: 'Edit Cabang',
            fields
        }
    }
};