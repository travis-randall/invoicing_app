"use strict";

import React          from "react";
require('../../styles/styles.scss');

export default class Index extends React.Component {

  render(){

    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header className="mdl-layout__header mdl-layout__header--scroll mdl-color--primary">
         <div className="mdl-layout--large-screen-only mdl-layout__header-row">
         </div>
         <div className="mdl-layout--large-screen-only mdl-layout__header-row">
           <h3>MORTYZ &nbsp;</h3>
           <h5>Invoicing System</h5>
         </div>
         <div className="mdl-layout--large-screen-only mdl-layout__header-row">
         </div>
         <div className="mdl-layout__tab-bar mdl-js-ripple-effect mdl-color--primary-dark">
           <a href="#current-invoices" className="mdl-layout__tab is-active">Current Invoices</a>
           <a href="#archived-invoices" className="mdl-layout__tab">Archived Invoices</a>
           <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored mdl-shadow--4dp mdl-color--accent" id="add">
             <i className="material-icons" role="presentation">add</i>
             <a href="#add-invoice"></a>
           </button>
         </div>
        </header>
        <main className="mdl-layout__content">
         <div className="mdl-layout__tab-panel is-active" id="current-invoices">
         <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--4-col">
             <h4>Current Invoices</h4>
             <table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
              <thead>
                <tr>
                  <th className="mdl-data-table__cell--non-numeric">Invoice</th>
                  <th className="mdl-data-table__cell--non-numeric">Company</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="mdl-data-table__cell--non-numeric">ACME-Corp-00051113</td>
                  <td className="mdl-data-table__cell--non-numeric">ACME Corporation</td>
                  <td>$2,000.00</td>
                </tr>
                <tr>
                  <td className="mdl-data-table__cell--non-numeric">INV-002</td>
                  <td className="mdl-data-table__cell--non-numeric">Red Bull Inc.</td>
                  <td>$300.00</td>
                </tr>
                <tr>
                  <td className="mdl-data-table__cell--non-numeric">INV-003</td>
                  <td className="mdl-data-table__cell--non-numeric">Minning Inc.</td>
                  <td>$5,000.00</td>
                </tr>
              </tbody>
            </table>
          </div>
           <div className="mdl-cell mdl-cell--8-col">
            <h4>Invoice</h4>
            <section className="section--left mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
              <div className="mdl-card mdl-cell mdl-cell--12-col">
                <div className="mdl-card__supporting-text mdl-grid mdl-grid--no-spacing">
                  <p>Please select an invoice on the left.</p>
                </div>
              </div>
            </section>
           </div>
         </div>
         </div>
         <div className="mdl-layout__tab-panel" id="archived-invoices">
           <section className="section--center mdl-grid mdl-grid--no-spacing">
             <div className="mdl-cell mdl-cell--12-col">
               <h4>Features</h4>
               Minim duis incididunt est cillum est ex occaecat consectetur. Qui sint ut et qui nisi cupidatat. Reprehenderit nostrud proident officia exercitation anim et pariatur ex.
               <ul className="toc">
                 <h4>Contents</h4>
                 <a href="#lorem1">Lorem ipsum</a>
                 <a href="#lorem2">Lorem ipsum</a>
                 <a href="#lorem3">Lorem ipsum</a>
                 <a href="#lorem4">Lorem ipsum</a>
                 <a href="#lorem5">Lorem ipsum</a>
               </ul>

               <h5 id="lorem1">Lorem ipsum dolor sit amet</h5>
               Excepteur et pariatur officia veniam anim culpa cupidatat consequat ad velit culpa est non.
               <ul>
                 <li>Nisi qui nisi duis commodo duis reprehenderit consequat velit aliquip.</li>
                 <li>Dolor consectetur incididunt in ipsum laborum non et irure pariatur excepteur anim occaecat officia sint.</li>
                 <li>Lorem labore proident officia excepteur do.</li>
               </ul>

               <p>
                 Sit qui est voluptate proident minim cillum in aliquip cupidatat labore pariatur id tempor id. Proident occaecat occaecat sint mollit tempor duis dolor cillum anim. Dolore sunt ea mollit fugiat in aliqua consequat nostrud aliqua ut irure in dolore. Proident aliqua culpa sint sint exercitation. Non proident occaecat reprehenderit veniam et proident dolor id culpa ea tempor do dolor. Nulla adipisicing qui fugiat id dolor. Nostrud magna voluptate irure veniam veniam labore ipsum deserunt adipisicing laboris amet eu irure. Sunt dolore nisi velit sit id. Nostrud voluptate labore proident cupidatat enim amet Lorem officia magna excepteur occaecat eu qui. Exercitation culpa deserunt non et tempor et non.
               </p>
               <p>
                 Do dolor eiusmod eu mollit dolore nostrud deserunt cillum irure esse sint irure fugiat exercitation. Magna sit voluptate id in tempor elit veniam enim cupidatat ea labore elit. Aliqua pariatur eu nulla labore magna dolore mollit occaecat sint commodo culpa. Eu non minim duis pariatur Lorem quis exercitation. Sunt qui ex incididunt sit anim incididunt sit elit ad officia id.
               </p>
               <p id="lorem2">
                 Tempor voluptate ex consequat fugiat aliqua. Do sit et reprehenderit culpa deserunt culpa. Excepteur quis minim mollit irure nulla excepteur enim quis in laborum. Aliqua elit voluptate ad deserunt nulla reprehenderit adipisicing sint. Est in eiusmod exercitation esse commodo. Ea reprehenderit exercitation veniam adipisicing minim nostrud. Veniam dolore ex ea occaecat non enim minim id ut aliqua adipisicing ad. Occaecat excepteur aliqua tempor cupidatat aute dolore deserunt ipsum qui incididunt aliqua occaecat sit quis. Culpa sint aliqua aliqua reprehenderit veniam irure fugiat ea ad.
               </p>
               <p>
                 Eu minim fugiat laborum irure veniam Lorem aliqua enim. Aliqua veniam incididunt consequat irure consequat tempor do nisi deserunt. Elit dolore ad quis consectetur sint laborum anim magna do nostrud amet. Ea nulla sit consequat quis qui irure dolor. Sint deserunt excepteur consectetur magna irure. Dolor tempor exercitation dolore pariatur incididunt ut laboris fugiat ipsum sunt veniam aute sunt labore. Non dolore sit nostrud eu ad excepteur cillum eu ex Lorem duis.
               </p>
               <p>
                 Id occaecat velit non ipsum occaecat aliqua quis ut. Eiusmod est magna non esse est ex incididunt aute ullamco. Cillum excepteur sint ipsum qui quis velit incididunt amet. Qui deserunt anim enim laborum cillum reprehenderit duis mollit amet ad officia enim. Minim sint et quis aliqua aliqua do minim officia dolor deserunt ipsum laboris. Nulla nisi voluptate consectetur est voluptate et amet. Occaecat ut quis adipisicing ad enim. Magna est magna sit duis proident veniam reprehenderit fugiat reprehenderit enim velit ex. Ullamco laboris culpa irure aliquip ad Lorem consequat veniam ad ipsum eu. Ipsum culpa dolore sunt officia laborum quis.
               </p>

               <h5 id="lorem3">Lorem ipsum dolor sit amet</h5>

               <p id="lorem4">
                 Eiusmod nulla aliquip ipsum reprehenderit nostrud non excepteur mollit amet esse est est dolor. Dolore quis pariatur sit consectetur veniam esse ullamco duis Lorem qui enim ut veniam. Officia deserunt minim duis laborum dolor in velit pariatur commodo ullamco eu. Aute adipisicing ad duis labore laboris do mollit dolor cillum sunt aliqua ullamco. Esse tempor quis cillum consequat reprehenderit. Adipisicing proident anim eu sint elit aliqua anim dolore cupidatat fugiat aliquip qui.
               </p>
               <p id="lorem5">
                 Nisi eiusmod esse cupidatat excepteur exercitation ipsum reprehenderit nostrud deserunt aliqua ullamco. Anim est irure commodo eiusmod pariatur officia. Est dolor ipsum excepteur magna aliqua ad veniam irure qui occaecat eiusmod aute fugiat commodo. Quis mollit incididunt amet sit minim velit eu fugiat voluptate excepteur. Sit minim id pariatur ex cupidatat cupidatat nostrud nostrud ipsum.
               </p>
               <p>
                 Enim ea officia excepteur ad veniam id reprehenderit eiusmod esse mollit consequat. Esse non aute ullamco Lorem aliqua qui dolore irure eiusmod aute aliqua proident labore aliqua. Ipsum voluptate voluptate exercitation laborum deserunt nulla elit aliquip et minim ex veniam. Duis cupidatat aute sunt officia mollit dolor ad elit ad aute labore nostrud duis pariatur. In est sint voluptate consectetur velit ea non labore. Ut duis ea aliqua consequat nulla laboris fugiat aute id culpa proident. Minim eiusmod laboris enim Lorem nisi excepteur mollit voluptate enim labore reprehenderit officia mollit.
               </p>
               <p>
                 Cupidatat labore nisi ut sunt voluptate quis sunt qui ad Lorem esse nisi. Ex esse velit ullamco incididunt occaecat dolore veniam tempor minim adipisicing amet. Consequat in exercitation est elit anim consequat cillum sint labore cillum. Aliquip mollit laboris ad labore anim.
               </p>
             </div>
           </section>
         </div>
         <footer className="mdl-mega-footer">
           <div className="mdl-mega-footer--middle-section">
             <div className="mdl-mega-footer--drop-down-section">
               <input className="mdl-mega-footer--heading-checkbox" type="checkbox" checked />
               <h1 className="mdl-mega-footer--heading">Features</h1>
               <ul className="mdl-mega-footer--link-list">
                 <li><a href="#">About</a></li>
                 <li><a href="#">Terms</a></li>
                 <li><a href="#">Partners</a></li>
                 <li><a href="#">Updates</a></li>
               </ul>
             </div>
             <div className="mdl-mega-footer--drop-down-section">
               <input className="mdl-mega-footer--heading-checkbox" type="checkbox" checked />
               <h1 className="mdl-mega-footer--heading">Details</h1>
               <ul className="mdl-mega-footer--link-list">
                 <li><a href="#">Spec</a></li>
                 <li><a href="#">Tools</a></li>
                 <li><a href="#">Resources</a></li>
               </ul>
             </div>
             <div className="mdl-mega-footer--drop-down-section">
               <input className="mdl-mega-footer--heading-checkbox" type="checkbox" checked />
               <h1 className="mdl-mega-footer--heading">Technology</h1>
               <ul className="mdl-mega-footer--link-list">
                 <li><a href="#">How it works</a></li>
                 <li><a href="#">Patterns</a></li>
                 <li><a href="#">Usage</a></li>
                 <li><a href="#">Products</a></li>
                 <li><a href="#">Contracts</a></li>
               </ul>
             </div>
             <div className="mdl-mega-footer--drop-down-section">
               <input className="mdl-mega-footer--heading-checkbox" type="checkbox" checked />
               <h1 className="mdl-mega-footer--heading">FAQ</h1>
               <ul className="mdl-mega-footer--link-list">
                 <li><a href="#">Questions</a></li>
                 <li><a href="#">Answers</a></li>
                 <li><a href="#">Contact us</a></li>
               </ul>
             </div>
           </div>
           <div className="mdl-mega-footer--bottom-section">
             <div className="mdl-logo">
               Built by <a href="http://33.media.tumblr.com/tumblr_m9ql4cbGFo1qd2g3i.gif">Dev Pixel</a>.
             </div>
           </div>
         </footer>
       </main>
    </div>
    );
  }

}
