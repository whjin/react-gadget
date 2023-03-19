import React from "react";
import Child from "./Child";
import "./context.less";
import { Provider } from "./context";

class Parent extends React.Component {
  state = {
    info: `<h5 style="text-align: start; line-height: 1;"><span style="font-size: 19px; font-family: 微软雅黑;">沁园春·雪</span></h5><p style="line-height: 1;"><span style="font-size: 16px; font-family: 微软雅黑;">北国风光，千里冰封，万里雪飘。</span></p><p style="line-height: 1;"><span style="font-size: 16px; font-family: 微软雅黑;">望长城内外，惟余莽莽；大河上下，顿失滔滔。</span></p><p style="line-height: 1;"><span style="font-size: 16px; font-family: 微软雅黑;">山舞银蛇，原驰蜡象，欲与天公试比高。</span></p><p style="line-height: 1;"><span style="font-size: 16px; font-family: 微软雅黑;">须晴日，看红装素裹，分外妖娆。</span></p><p style="line-height: 1;"><span style="font-size: 16px; font-family: 微软雅黑;">江山如此多娇，引无数英雄竞折腰。</span></p><p style="line-height: 1;"><span style="font-size: 16px; font-family: 微软雅黑;">惜秦皇汉武，略输文采；唐宗宋祖，稍逊风骚。</span></p><p style="line-height: 1;"><span style="font-size: 16px; font-family: 微软雅黑;">一代天骄，成吉思汗，只识弯弓射大雕。</span></p><p style="line-height: 1;"><span style="font-size: 16px; font-family: 微软雅黑;">俱往矣，数风流人物，还看今朝。</span></p><p><br></p>`,
  };
  render() {
    const { info } = this.state;
    return (
      <div className="context-container">
        <Provider value={{ info }}>
          <Child />
        </Provider>
      </div>
    );
  }
}

export default Parent;
