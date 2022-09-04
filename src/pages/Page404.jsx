import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

function Page404() {
  return (
    <Layout>
        <div className='container'>

            <div className="Page404">
                <h2>Pagina căutată nu a fost găsită! 	&#128542;</h2>
                <p>Apasa butonul de mai jos pentru a fi redirectionat către pagina principală.</p>
                <p>&nbsp;</p>
                <Link to="/" className='btn btn-red'>Pagina principală</Link>
            </div>
        
        </div>
    </Layout>
  )
}

export default Page404