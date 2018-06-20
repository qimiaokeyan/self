import React from 'react';
import ReactDOM, {render} from 'react-dom';//从REACT-DOM中导入一个ReactDOM，逗号后面的内容是把ReactDOM这个对象进行结构<=>import {render} from 'react-dom'
import './3-SELF-JSX'
/*
 * JSX渲染机制
 *   1,基于BABEL中的语法解析模块（BABEL-PRESET-REACT）把JSX语法编译为React.createElement(...)结构
 *          React.createElement(
                    'h1',
                    { id: 'titleBox', className: 'title', style: styleOBJ },
                    '\u73E0\u5CF0\u57F9\u8BAD'
            );
     2,执行React.create.Element(type,props,children),创建一个对象（虚拟dom）
     key:null
     props:{id: "titleBox", className: "title", style: {…}, children: "珠峰培训"}
     ref:null
     type:"h1"
     ...
     __proto__:Object.prototype

     3,ReactDOM.render(JSX语法最后生成的对象，容器)，基于render方法把生成的对象动态创建为DOM元素，插入到指定的容器中
 *
 *
 */


// let styleOBJ = {color: 'red'};
// render(<h1 id='titleBox' className='title' style={styleOBJ}>珠峰培训</h1>, root);
// console.log(React.createElement(
//     'h1',
//     {id: 'titleBox', className: 'title', style: styleOBJ},
//     '\u73E0\u5CF0\u57F9\u8BAD'
// ));