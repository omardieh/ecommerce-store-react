import styles from "./styles.module.css";

const data = {
    categories : [
        {
        "id": 1,
        "name": "Clothes",
        "image": "https://api.lorem.space/image/fashion?w=640&h=480&r=6011"
        },
        {
        "id": 2,
        "name": "Electronics",
        "image": "https://api.lorem.space/image/watch?w=640&h=480&r=304"
        },
        {
        "id": 3,
        "name": "Furniture",
        "image": "https://api.lorem.space/image/furniture?w=640&h=480&r=9450"
        },
        {
        "id": 4,
        "name": "Shoes",
        "image": "https://api.lorem.space/image/shoes?w=640&h=480&r=3133"
        },
        {
        "id": 5,
        "name": "Others",
        "image": "https://api.lorem.space/image?w=640&h=480&r=4432"
        }
        ]
}

export const CategoriesList = () => {
    return(
        <div className={styles.layout}>
            {data.categories.map((element, index) => <div key={element.id || index}>
                <h3>
                    {element.name}
                </h3>
                <img src={element.image} />
            </div>)}
        </div>
    )
}