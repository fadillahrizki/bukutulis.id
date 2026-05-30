import SimpleCrud from "@/components/SimpleCrud.vue";

const fields = [
    {
        name: 'id_supplier',
        label: 'ID Supplier',
        type: 'text'
    },
    {
        name: 'nama_supplier',
        label: 'Nama Supplier',
        type: 'text'
    },
    {
        name: 'alamat1',
        label: 'Alamat 1',
        type: 'textarea'
    },
    {
        name: 'alamat2',
        label: 'Alamat 2',
        type: 'textarea'
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
        name: 'include_ppn',
        label: 'Include PPN',
        defaultValue: 1,
        type: 'select',
        options: [
            { label: 'Ya', value: 1 },
            { label: 'Tidak', value: 0 }
        ]
    },
    {
        name: 'ppn',
        label: 'PPN (%)',
        type: 'number'
    },
    {
        name: 'keterangan',
        label: 'Keterangan',
        type: 'textarea'
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
    path: 'supplier',
    component: SimpleCrud,
    config: {
        endpoint: '/supplier',
        id_field: 'id_supplier',
        list: {
            title: 'List Supplier',
            columns: [
                {
                    key: 'id_supplier',
                    label: 'ID Supplier'
                },
                {
                    key: 'nama_supplier',
                    label: 'Nama Supplier'
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
                    key: 'include_ppn',
                    label: 'Include PPN',
                    type: 'status-badge',
                    badge: {
                        color: {
                            '1': 'success',
                            '0': 'secondary'
                        },
                        label: {
                            '1': 'Ya',
                            '0': 'Tidak'
                        }
                    }
                },
                {
                    key: 'ppn',
                    label: 'PPN (%)'
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
            title: 'Tambah Supplier',
            fields
        },
        edit: {
            title: 'Edit Supplier',
            fields
        }
    }
};