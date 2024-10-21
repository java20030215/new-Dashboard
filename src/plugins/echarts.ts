import ECharts from 'vue-echarts';
import { use } from 'echarts/core';

// 导入需要的渲染器
import { CanvasRenderer } from 'echarts/renderers'; // 确保导入渲染器

// 导入图表类型
import {
    BarChart,
    PieChart,
    LineChart,
    ScatterChart,
    EffectScatterChart,
    MapChart,
    SunburstChart // 添加 SunburstChart
} from 'echarts/charts';

// 导入组件
import {
    GridComponent,
    TitleComponent,
    TooltipComponent,
    LegendComponent,
    DatasetComponent,
    VisualMapComponent,
    GeoComponent,
    ToolboxComponent,
    BrushComponent,
    PolarComponent
} from 'echarts/components';

// 注册所有使用的组件和渲染器
use([
    CanvasRenderer, // 添加 CanvasRenderer
    BarChart,
    PieChart,
    LineChart,
    ScatterChart,
    EffectScatterChart,
    MapChart,
    SunburstChart, // 注册 SunburstChart
    GridComponent,
    TitleComponent,
    TooltipComponent,
    LegendComponent,
    DatasetComponent,
    VisualMapComponent,
    GeoComponent,
    ToolboxComponent,
    BrushComponent,
    PolarComponent
]);

export const registerEcharts = (app: any) => {
    app.component('v-chart', ECharts); // 注册 ECharts 组件
};
