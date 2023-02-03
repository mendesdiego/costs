import styles from './ProjectCard.module.css'

import { Link } from 'react-router-dom'

import {BsPencil, BsFillTrashFill} from 'react-icons/bs'

function ProjectCard({id, name, budget, category, handleRemove}) {
    // const cssClass = category.name.toLowerCase()
    return (
        <div className={styles.project_card} key={category.name}>
            <h4>{name}</h4>
            <p>
                Orçamento: <span>R${budget}</span>
            </p>
            <p className={styles.category_text}>
                <span className={`${styles[category.toLowerCase()]}`}></span> {category}
                {/* {console.log(category.name.toLowerCase())} */}
                {/* {console.log(styles[category.name.toLowerCase()])} */}
            </p>

            <div className={styles.project_card_actions}>
                <Link to='/'>
                    <BsPencil /> Editar
                </Link>
                <button>
                    <BsFillTrashFill /> Excluir
                </button>
            </div>
        </div>
    )
}

export default ProjectCard