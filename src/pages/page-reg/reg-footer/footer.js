import * as React from 'react';
import "./reg-footer.css"

export const RegFooter = (props) =>
{
    return(
        <div className='reg-footer' style={{height: (props.curStep > 4 && props.curStep < 8) ? '20%' : '15%'}}>        
            <button className='reg-footer-button-goback' onClick={props.onBack}>Назад</button>
            {(props.curStep > 4 && props.curStep < 8) && <button className='reg-footer-button-goback' onClick={props.onSkip}>Пропустить</button>}
            {props.curStep === 8 ?
                <button className='reg-footer-button-next' onClick={props.onSubmit}>Отправить</button> : 
                <button className='reg-footer-button-next' onClick={props.onContinue}>Продолжить</button>}
        </div>
    )
}