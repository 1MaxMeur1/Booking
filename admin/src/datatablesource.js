export const userColumns = [
    {field: "id", headerName: "ID", width: 70},
    {field: "user", headerName: "User", width: 230, renderCell: (params) => {
        return (
            <div className="cellWithImg">
                <img src={params.row.img} alt="avatar" className="cellImg" />
                {params.row.username}
            </div>
        )
    }},
    {
        field: "email",
        headerName: "Email",
        width: 230
    },
    {
        field: "age",
        headerName: "Age",
        width: 100
    },
    {
        field: "status",
        headerName: "Status",
        width: 160,
        renderCell: (params) => {
            return <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
        }
    }
]

export const userRows = [
    {
        id: 1,
        username: "Snow",
        img: 'https://images.pexels.com/photos/11293719/pexels-photo-11293719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        status: "active",
        email: "lsnow@gmail.com",
        age: 35
    },
    {
        id: 2,
        username: "Zero",
        img: 'https://images.pexels.com/photos/11293719/pexels-photo-11293719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        status: "active",
        email: "aeo@gmail.com",
        age: 23
    },
    {
        id: 3,
        username: "Someone",
        img: 'https://images.pexels.com/photos/11293719/pexels-photo-11293719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        status: "pending",
        email: "lsobaka@gmail.com",
        age: 51
    },
    {
        id: 4,
        username: "Kit",
        img: 'https://images.pexels.com/photos/11293719/pexels-photo-11293719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        status: "passive",
        email: "vaysa@gmail.com",
        age: 11
    },
    {
        id: 5,
        username: "Vesn",
        img: 'https://images.pexels.com/photos/11293719/pexels-photo-11293719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        status: "passive",
        email: "vasyau@gmail.com",
        age: 17
    },
    {
        id: 6,
        username: "Maixe",
        img: 'https://images.pexels.com/photos/11293719/pexels-photo-11293719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        status: "active",
        email: "lmanya@gmail.com",
        age: 28
    },
    {
        id: 7,
        username: "Heofr",
        img: 'https://images.pexels.com/photos/11293719/pexels-photo-11293719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        status: "passive",
        email: "nemert@gmail.com",
        age: 22
    },
    {
        id: 8,
        username: "Mansddas",
        img: 'https://images.pexels.com/photos/11293719/pexels-photo-11293719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        status: "active",
        email: "safddsfa@gmail.com",
        age: 19
    },
    {
        id: 9,
        username: "MSadas",
        img: 'https://images.pexels.com/photos/11293719/pexels-photo-11293719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        status: "active",
        email: "dasdf@gmail.com",
        age: 33
    },
    {
        id: 10,
        username: "Dasdr",
        img: 'https://images.pexels.com/photos/11293719/pexels-photo-11293719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        status: "passive",
        email: "lsnofdfw@gmail.com",
        age: 47
    },
]