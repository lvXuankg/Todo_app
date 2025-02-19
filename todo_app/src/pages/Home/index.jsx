import Item from "./Item";
import "./Item.scss";
const element = [
{
    id: 1,
    title: "Tiếng anh",
    notes: [
        {
            id: 1,
            title: "Học từ vựng",
            status: "Done"
        }
    ]
},
{
    id: 2,
    title: "Tiếng a",
    notes: [
        {
            id: 1,
            title: "Học ngữ pháp",
            status: "Done"
        }
    ]
},
{
    id: 3,
    title: "Tiếng b",
    notes: [
        {
            id: 1,
            title: "Làm đề",
            status: "Done"
        }
    ]
},
{
    id: 4,
    title: "Tiếng c",
    notes: [
        {
            id: 1,
            title: "Thi",
            status: "Done"
        }
    ]
},
{
    id: 5,
    title: "Tiếng e",
    notes: [
        {
            id: 1,
            title: "Học từ vựng",
            status: "Done"
        }
    ]
},
{
    id: 6,
    title: "Tiếng f",
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
    return (
        <>
            <div className="home">
                {
                    element.map((item, index) => (
                        <Item item={item} index={index+1} key={index}/>
                    ))
                }
            </div>
            
            
            
        </>
    )
}
export default Home;