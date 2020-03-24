import React, { Component } from "react";
import { MenuVisibility } from '../../constants/menuVisibility';
import { store } from '../../store/store';
import { toggleMenu } from '../../actions/toggleMenu';
import { changeTheme } from '../../actions/changeTheme';
import { Theme } from '../../constants/theme';

class Menu extends Component {
    render() {
        let menuVisibility = this.props.menuVisibility;
        let className = menuVisibility === MenuVisibility.Hidden 
            ? "hide" 
            : "show";
        
        const dispatchToggleMenuAction = () => {
            store.dispatch(toggleMenu());
        };

        const dispatchThemeAction = (theme) => {
            store.dispatch(changeTheme(theme));
        };

        return (
            <div id="calcMenu" className={className} onClick={() => dispatchToggleMenuAction()}>
                <div>
                    <h6 className="menu-title">Theme</h6>
                    <hr  />
                    <div className="theme-option-container">
                        <div 
                            onClick={() => dispatchThemeAction(Theme.Red)} 
                            className="theme-option" 
                            style={{background: "linear-gradient(90deg, #EE4540 50%, #2b2c2e 50%)"}}>                            
                        </div>
                        <div onClick={() => dispatchThemeAction(Theme.Blue)} className="theme-option" style={{backgroundColor:"#99ccff"}}></div>
                        <div onClick={() => dispatchThemeAction(Theme.Light)} className="theme-option" style={{backgroundColor:"#ececec"}}></div>
                        <div onClick={() => dispatchThemeAction(Theme.Dark)} className="theme-option" style={{backgroundColor:"#2b2c2e"}}></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu;