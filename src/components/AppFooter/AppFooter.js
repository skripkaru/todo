import React from 'react';
import './AppFooter.css'

const AppFooter = () => {
    return (
        <footer className="AppFooter">
            <div>3 заметки</div>
            <div className="TodoSortPanel">
                <span>Все</span>
                <span>Активные</span>
                <span>Завершенные</span>
            </div>
            <div>Удалить завершенные</div>
        </footer>
    )
};

export default AppFooter;
