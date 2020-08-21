import React from 'react'
import landing_img from '../image/mmmhs_wrestling.jpg'
import { Button } from 'semantic-ui-react'
import PaymentPage from './PaymentPage'

export default function LandingPage() {
    return (
        <div style={{backgroundImage:`url(${landing_img}`, backgroundSize:'cover', height:'100vh' }}>
            <div style={{background: `linear-gradient(0deg, #FFFFFF 11.21%, rgba(255, 255, 255, 0) 157.13%)`, height:'100vh', display:'flex', justifyContent:'space-around', alignItems:'center', flexDirection:'column'}}>
                <h1>Help make the benefits of wrestling available to your...</h1>
                <p><p>FAMILY</p><p>FRIENDS</p><p>COMMUNITY</p></p>
                <div style={styles.cent}>
                    <h3>DONATE NOW</h3>
                    <button 
                    style={styles.btn}
                    >
                        <p style={{marginBottom:0, paddingBottom:0, fontSize:'3em'}}>^</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

const styles = {
    btn:{
        borderRadius:'50px',
        textAlign:'center',
        height: '5em',
        width: '5em',
        transform:'rotate(180deg)',
    },
    cent:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
    }
}
