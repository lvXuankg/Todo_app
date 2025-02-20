import Item from "./Item";
import "./Item.scss";
import { GetDate } from "../../helpers/GetDate";
const element = [
{
    id: 1,
    title: "Tiếng anh",
    dateCreated: "28/02/2005",
    notes: [
        {
            id: 1,
            title: "Học từ vựng",
            status: "Done"
        },
        {
            id: 2,
            title: "a",
            status: "Done"
        },
        {
            id: 3,
            title: "b",
            status: "Pending"
        },
        {
            id: 4,
            title: "c",
            status: "Done"
        },
        {
            id: 5,
            title: "d",
            status: "Pending"
        }
    ]
},
{
    id: 2,
    title: "Tiếng a",
    dateCreated: "06/06/2025",
    notes: [
        {
            id: 1,
            title: "Học từ vựng",
            status: "Pending"
        },
        {
            id: 2,
            title: "a",
            status: "Done"
        },
        {
            id: 3,
            title: "b",
            status: "Done"
        },
        {
            id: 4,
            title: "c",
            status: "Pending"
        },
        {
            id: 5,
            title: "d",
            status: "Pending"
        }
    ]
},
{
    id: 3,
    title: "Tiếng b",
    dateCreated: "07/06/2025",
    notes: [
        {
            id: 1,
            title: "Học từ vựng",
            status: "Done"
        },
        {
            id: 2,
            title: "a",
            status: "Done"
        },
        {
            id: 3,
            title: "b",
            status: "Done"
        },
        {
            id: 4,
            title: "c",
            status: "Done"
        },
        {
            id: 5,
            title: "d",
            status: "Done"
        }
    ]
},
{
    id: 4,
    title: "Tiếng c",
    dateCreated: "08/06/2025",
    notes: [
        {
            id: 1,
            title: "Học từ vựng",
            status: "Pending"
        },
        {
            id: 2,
            title: "a",
            status: "Pending"
        },
        {
            id: 3,
            title: "b",
            status: "Pending"
        },
        {
            id: 4,
            title: "c",
            status: "Pending"
        },
        {
            id: 5,
            title: "d",
            status: "Pending"
        }
    ]
},
{
    id: 5,
    title: "Tiếng e",
    dateCreated: "09/06/2025",
    notes: [
        {
            id: 1,
            title: "Học từ vựng",
            status: "Pending"
        },
        {
            id: 2,
            title: "a",
            status: "Pending"
        },
        {
            id: 3,
            title: "b",
            status: "Pending"
        },
        {
            id: 4,
            title: "c",
            status: "Pending"
        },
        {
            id: 5,
            title: "d",
            status: "Done"
        }
    ]
},
{
    id: 6,
    title: "Tiếng f",
    dateCreated: "10/06/2025",
    notes: [
        {
            id: 1,
            title: "Học ngữ pháp",
            status: "Done"
        }
    ]
},
{
    id: 7,
    title: "Tiếng g",
    dateCreated: "11/06/2025",
    notes: [
        {
            id: 1,
            title: "Làm đề",
            status: "Done"
        }
    ]
},
{
    id: 8,
    title: "Tiếng h",
    dateCreated: "12/06/2025",
    notes: [
        {
            id: 1,
            title: "Thi",
            status: "Done"
        }
    ]
},
]
function Home(){
    console.log(GetDate());
    return (
        <>
            <div className="home">
                {
                    element.map((item, index) => (
                        <Item item={item} key={index}/>
                    ))
                }
            </div>
            
            
            
        </>
    )
}
export default Home;