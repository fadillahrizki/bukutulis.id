import SimpleCrud from "@/components/SimpleCrud.vue";

const fields = [
    {
        name: 'id_karyawan',
        label: 'ID Karyawan',
        type: 'text'
    },
    {
        name: 'nama_karyawan',
        label: 'Nama Karyawan',
        type: 'text'
    },
    {
        name: 'ktp',
        label: 'No. KTP',
        type: 'text'
    },
    {
        name: 'alamat',
        label: 'Alamat',
        type: 'textarea'
    },
    {
        name: 'notelp',
        label: 'No. Telepon',
        type: 'text'
    },
    {
        name: 'tgl_lahir',
        label: 'Tanggal Lahir',
        type: 'date'
    },
    {
        name: 'jkelamin',
        label: 'Jenis Kelamin',
        type: 'select',
        options: [
            { label: 'Laki-laki', value: 0 },
            { label: 'Perempuan', value: 1 }
        ]
    },
    {
        name: 'agama',
        label: 'Agama',
        type: 'select',
        options: [
            { label: 'Islam', value: 0 },
            { label: 'Kristen', value: 1 },
            { label: 'Katolik', value: 2 },
            { label: 'Hindu', value: 3 },
            { label: 'Buddha', value: 4 },
            { label: 'Konghucu', value: 5 }
        ]
    },
    {
        name: 'jabatan',
        label: 'Jabatan',
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
    path: 'karyawan',
    component: SimpleCrud,
    config: {
        endpoint: '/karyawan',
        id_field: 'id_karyawan',
        list: {
            title: 'List Karyawan',
            columns: [
                {
                    key: 'id_karyawan',
                    label: 'ID Karyawan'
                },
                {
                    key: 'nama_karyawan',
                    label: 'Nama Karyawan'
                },
                {
                    key: 'ktp',
                    label: 'No. KTP'
                },
                {
                    key: 'notelp',
                    label: 'No. Telepon'
                },
                {
                    key: 'jabatan',
                    label: 'Jabatan'
                },
                {
                    key: 'jkelamin',
                    label: 'Jenis Kelamin',
                    type: 'status-badge',
                    badge: {
                        color: {
                            '0': 'primary',
                            '1': 'info'
                        },
                        label: {
                            '0': 'Laki-laki',
                            '1': 'Perempuan'
                        }
                    }
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
            title: 'Tambah Karyawan',
            fields
        },
        edit: {
            title: 'Edit Karyawan',
            fields
        }
    }
};