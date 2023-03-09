import './App.css'
import {TwitterFollowCard} from './TwitterFollowCard.jsx'



export function App() {
    return (
        <section className='App'>
        <TwitterFollowCard 
            userName='kikobeats' 
        >
            <strong>Kiko Beats</strong>
        </TwitterFollowCard>
        <TwitterFollowCard 
            userName='midudev' 
            initialIsFollowing
        >
            <strong>Miguel Ángel Duran</strong>
        </TwitterFollowCard>
        <TwitterFollowCard 
            userName='elonmusk' 
        >
            <strong>Elon Musk</strong>
        </TwitterFollowCard>
        <TwitterFollowCard 
            userName='vxnder' 
        >
            <strong>Vanderhart</strong>
        </TwitterFollowCard>
        </section>
    )
}