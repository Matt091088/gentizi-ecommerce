// Componente CategoryCard
function CategoryCard(props) {

  return (

    <div

      className="category-card"

      onClick={() => props.changeCategory(props.title)}

    >

      <h3>
        {props.title}
      </h3>

    </div>

  )
}

export default CategoryCard