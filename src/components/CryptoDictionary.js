import React from 'react';
import styled from 'styled-components';

export default function CryptoDictionary() {
    return (
        <CryptoDictionaryWrapper>
            <div className="dict-container">
                <div className="heading text-capitalize mb-5">крипто <span className="orange">
                    Словарь</span></div>
                <div className="title text-capitalize my-3">Что такое криптовалюта?</div>
                <div className="content">
                    <p><span className="orange">Криптовалюта</span> - это цифровой актив, разработанный для работы в качестве средства обмена, использующего сильную криптографию для защиты финансовых транзакций, контроля создания дополнительных единиц и проверки передачи активов.</p>
                </div>
                <div className="title text-capitalize my-3">Что такое блокчейн?</div>
                <div className="content">
                    <p><span className="orange">Блокчейн</span> - это база данных, которая совместно используется сетью компьютеров. После добавления записи в цепочку ее очень трудно изменить.Записи, принятые сетью, добавляются в блок. Каждый блок содержит уникальный код, называемый хэш. Он также содержит хэш предыдущего блока в цепочке.</p>
                        <p><span className="orange">Цифровая книга (digital ledger)</span> используется для записи транзакций на многих компьютерах, так что любая вовлеченная запись не может быть изменена задним числом, без изменения всех последующих блоков.</p>
                </div>
                <div className="title text-capitalize my-3">Что такое биткойн?</div>
                <div className="content">
                    <p><span className="orange">Биткойн</span> является валютой цифровой и глобальной денежной системы. Это позволяет людям отправлять или получать деньги через Интернет, даже тем, кого они не знают или не имеют большого доверия. Математическое поле криптографии - основа безопасности Биткойна. Сам биткойн был изобретен Сатоши Накамото.</p>
                </div>
                <div className="title text-capitalize my-3">Как работает биткойн?</div>
                <div className="content">
                    <p>Каждый биткойн - это, по сути, компьютерный файл, который хранится в приложении «цифровой кошелек» на смартфоне или компьютере. Люди могут отправлять биткойны (или их часть) на ваш цифровой кошелек, а вы можете отправлять биткойны другим людям. Каждая отдельная транзакция записывается в публичный список, называемый блокчейн.</p>
                </div>
                <div className="title text-capitalize my-3">Что такое Альткойн?</div>
                <div className="content">
                    <p><span className="orange">Альткойн</span> - это любая цифровая криптовалюта, похожая на биткойн. Говорят, что этот термин означает «альтернатива биткойну» и используется для описания любой криптовалюты, которая не является биткойном.</p>
                </div>
                <div className="title text-capitalize my-3">Что такое Ethereum?</div>
                <div className="content">
                    <p><span className="orange">Ethereum</span> запущенный в 2015 году, представляет собой децентрализованную программную платформу с открытым исходным кодом, основанную на цепочке блоков, используемую для собственной криптовалюты ether. Это позволяет создавать и запускать SmartContracts и Распределенные приложения (ppApps) без простоев, мошенничества, контроля или вмешательства третьей стороны.</p>
                </div>
                <div className="title text-capitalize my-3">В чем разница между биткойнами и Ethereum?</div>
                <div className="content">
                    <p><span className="orange">Ethereum</span>  это еще одна криптовалюта, и многие считают, что 
                    <span className="orange"> Биткойн</span> может превзойти потенциальную монету на рынке. Разница между Ethereum и Биткойном заключается в том, что Биткойн - не что иное, как валюта, тогда как Ethereum - это бухгалтерская технология, которую компании используют для создания новых программ.</p>
                </div>
                <div className="title text-capitalize my-3">Что такое ICO?</div>
                <div className="content">
                    <p><span className="orange">Первоначальное предложение монет</span> (ICO) является грубым эквивалентом пространства криптовалюты для IPO в основном инвестиционном мире. ICO выступают в качестве сборщиков средств; компания, желающая создать новую монету, приложение или услугу, запускает ICO.</p>
                    <p>В ICO количество криптовалюты продается в форме «жетонов» («монет») спекулянтам или инвесторам в обмен на законное платежное средство или другие криптовалюты, такие как Биткойн или Ethereum. Проданные токены рекламируются как будущие функциональные единицы валюты, если или когда будет достигнута цель финансирования ICO и начнется проект. В некоторых случаях, таких как Ethereum, токены должны использовать систему для своих целей.</p>
                    <p>ICO может быть источником капитала для начинающих компаний. ICO могут позволить стартапам избежать соблюдения нормативных требований и посредников, таких как: венчурные капиталисты, банки и биржи.</p>
                </div>
                <div className="title text-capitalize my-3">Что такое IEO?</div>
                <div className="content">
                    <p><span className="orange">Первоначальное предложение биржа</span> (IEO) является удержанием продажи токена на бирже. IEO работает на разных биржах криптовалюты в зависимости от того, как это запланировано. Биржи создают платформу, где объеденение разработчиков может чеканить и продавать проекты крипто-энтузиастам и инвесторам!
                    </p>
                    <p>До того, как продажа токенов будет проведена на платформе обмена IEO, как команда обмена, так и команда проекта будут иметь дело с соглашением. Биржевая платформа проведет тщательный анализ проекта, используя определенные условия, чтобы убедиться, что проект достоин аутентичности.</p>
                    <p>Как только платформа обмена данными освоится с проектом, она обнародует дату продажи токена вместе с фиксированной ценой за токен. Если у биржи есть свой токен, участники должны приобрести единицы токенов, прежде чем они смогут участвовать в Первоначальном предложении обмена.</p>
                </div>
                <div className="title text-capitalize my-3">Что такое майнинг?</div>
                <div className="content">
                    <p><span className="orange">Криптовалюта майнинг</span> - это процесс, в котором транзакции для различных форм криптовалюты проверяются и добавляются в цифровой регистр блокчейна.</p>
                    <p>Каждый раз, когда выполняется транзакция криптовалюты, майнер криптовалюты отвечает за обеспечение подлинности информации и обновление цепочки блоков с помощью транзакции. Сам процесс майнинга включает в себя конкуренцию с другими криптоминерами для решения сложных математических задач с помощью криптографических хеш-функций, связанных с блоком, содержащим данные транзакции.</p>
                    <p>Первый криптовалютный майнер, взломавший код, вознаграждается возможностью авторизовать транзакцию, а взамен за предоставленный сервис криптоминеры зарабатывают небольшое количество собственной криптовалюты. Однако, чтобы быть конкурентоспособным с другими криптоминерами, майнеру криптовалют необходим компьютер со специализированным оборудованием.</p>
                </div>
            </div>
        </CryptoDictionaryWrapper>
    )
}


const CryptoDictionaryWrapper = styled.div`
    margin-top: 0.5rem;
    padding: 4rem;
    padding-top: 1rem;
    .heading {
        animation: show-on-load-right ease-out;
        animation-duration: 1s;
    }
    .title {
        animation: show-on-load-right ease-out;
        animation-duration: 1.5s;
    }
    .content {
        animation: show-on-load-left ease-out;
        animation-duration: 1.5s;
    }
    .orange {
        color: var(--mainOrange)
    }
    .title {
        font-size: 1.5rem;
        font-family: "Yeseva One", sans-serif;
    }
    .heading {
        font-size: 2rem;
        font-family: "Yeseva One", sans-serif;
        border-bottom: solid 5px var(--mainOrange);
    }
    .content {
        font-family: "Arsenal", sans-serif;
        font-size: 1rem;
    }
    @keyframes show-on-load-right {
        from {transform: translate(100rem, 0px)}
        to {transform: translate(0px,0px)}
    }
    @keyframes show-on-load-left {
        from {transform: translate(-100rem, 0px)}
        to {transform: translate(0px,0px)}
    }
`