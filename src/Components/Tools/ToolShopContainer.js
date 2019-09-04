import React, { Component } from 'react';
import { ToolShop } from './ToolShop';
import pj_u_green from '../../images/shop/pj-u-green.png';
import pj_u_red from '../../images/shop/pj-u-red.png';
import pj_u_black from '../../images/shop/pj-u-black.png';
import pj_c_yellow from '../../images/shop/pj-c-yellow.png';
import pj_c_black from '../../images/shop/pj-c-black.png';
import s_u from '../../images/shop/s-u.png';
import s_c from '../../images/shop/s-c.png';

export class ToolShopContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 'shop',
      toolsShop: [
        {id: 'planerA4-green', name: 'Піжама з єдинорогом', category: 'товар', color: 'зелений', sellPrice: 700, picture: pj_u_green, descrip: 'Слово «піжама» походить від індійського (за ін. джерелами, перського) "piejamah" й означає «одяг для ніг». Так індуси називають вільні за кроєм штани, які мають пояс-зав’язку на талії.'},
        {id: 'planerA4-red', name: 'Піжама з єдинорогом', category: 'товар', color: 'червоний', sellPrice: 840, picture: pj_u_red, descrip: 'В Індії такий одяг носили тільки чоловіки. Згодом цими зручними штанами захопилися британські колоністи (вони вважали, що цей одяг прекрасний для відпочинку після обіднього чаю).'},
        {id: 'planerA4-black', name: 'Піжама з єдинорогом', category: 'товар', color: 'чорний', sellPrice: 840, picture: pj_u_black, descrip: 'У кінці 19 століття індійський винахід з’явився та здобув популярність у Великій Британії. Більше того, вже на початку 1900-х років модельєр Поль Пуаре створив вбрання з шовку, за структурою та кроєм схоже на піжаму.'},
        {id: 'planerA5-yellow', name: 'Піжама з котом', category: 'товар', color: 'жовтий', sellPrice: 740, picture: pj_c_yellow, descrip: 'Цей костюм можна було вдягати «на вихід» у денний час та навіть носити на бали та світські вечори.'},
        {id: 'ads'},
        {id: 'planerA5-black', name: 'Піжама з котом', category: 'товар', color: 'чорний', sellPrice: 500, picture: pj_c_black, descrip: 'Довести те що піжама, це не тільки гарно, але й дуже практично, вдалося одній із швейних фірм штату Мічиган. У 1860 році вони просто сказали батькам, що навіть у морозну та дощову погоду їхні діти не змерзнуть вночі.'},
        {id: 'planerA5-black-sticker', name: 'Наліпка з єдинорогом', category: 'супутній товар', color: 'чорний', sellPrice: 20, picture: s_u, descrip: 'Їхні піжами були пошиті з товстої офсетної тканини, тому батьки їм повірили. Протягом року фірма збільшила свої прибутки та об’єми виробництва у 20 разів!'},
        {id: 'planerA5-red-sticker', name: 'Наліпка з котом', category: 'супутній товар', color: 'червоний', sellPrice: 20, picture: s_c, descrip: 'Й пізніше окрім піжам запропонувала батькам колготки, повзунки та дитячі сорочки з рукавичками. Цей одяг популярний дотепер серед батьків, які мають малюків до року, причому у всіх країнах світу.'},
      ],
      showBuyModal: false
    };
  }

  render () {

    return (
      <ToolShop 
      id={this.state.id}
      toolsShop={this.state.toolsShop}
      />
    )
  }
}