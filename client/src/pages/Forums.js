import React from 'react'
import WidgetBot from '@widgetbot/react-embed'
import '../styles/Forums.css';

function Forums() {
    return (
        <div class="discord">
            <WidgetBot
                server="904727017356935208"
                channel="904727017356935211"
                height={'calc(100vh - 60px)'}
                width={'100%'}
            />
        </div>
    )
}

export default Forums
