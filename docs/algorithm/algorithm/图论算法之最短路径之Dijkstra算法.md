# 图论算法之最短路径之 Dijkstra 算法

1736 年，瑞士数学家 Euler（欧拉）在他的一篇论文中讨论了格尼斯七桥问题，由此诞生了一个全新的数学分支——图论（Graph Theory），在经历了 200 多年的发展之后，图论已经积累了大量的理论和结果，其应用理论也逐步扩大。
**一、最短路径**
###Dijkstra 算法
**1、基本思想**
如果 v<sub>0</sub>至 u 的最短路径经过 v<sub>1</sub>，那么 v<sub>0</sub>到 v<sub>1</sub>的路径也是 v<sub>0</sub>到 v<sub>1</sub>的最短路径。
按路径长度的递增次序，逐步产生最短路径。
Dijkstra 算法的本质是贪心算法。
**2、步骤**
（1）首先求出 v<sub>0</sub>为源点长度最短的一条最短路径，即具有最小权的边< v<sub>0</sub>，v>。
（2）求出源点到各个顶点下一个最短路径：设其终点是 u，则 v<sub>0</sub>到 u 的最短路径或者是边< v<sub>0</sub>，u>，或者由一条已求得的最短路径（v<sub>0</sub>，v）和边<v，u>构成。
（3）重复 2 直到从顶点 v0 到其他各个顶点的最短路径全部求出为止。
**3、算法图解**
操作步骤：
(1) 初始时，S 只包含起点 s；U 包含除 s 外的其他顶点，且 U 中顶点的距离为"起点 s 到该顶点的距离"（例如，U 中顶点 v 的距离为(s,v)的长度，然后 s 和 v 不相邻，则 v 的距离为 ∞）。
(2) 从 U 中选出"距离最短的顶点 k"，并将顶点 k 加入到 S 中；同时，从 U 中移除顶点 k。
(3) 更新 U 中各个顶点到起点 s 的距离。之所以更新 U 中顶点的距离，是由于上一步中确定了 k 是求出最短路径的顶点，从而可以利用 k 来更新其它顶点的距离；例如，(s,v)的距离可能大于(s,k)+(k,v)的距离。
(4) 重复步骤(2)和(3)，直到遍历完所有顶点。

单纯的看上面的理论可能比较难以理解，下面通过实例来对该算法进行说明。
![01.jpg](http://upload-images.jianshu.io/upload_images/1981856-e892ed0c594eda86.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)以上图 G4 为例，来对迪杰斯特拉进行算法演示(以第 4 个顶点 D 为起点)。
![02.jpg](http://upload-images.jianshu.io/upload_images/1981856-9cd18f3e9899a37b.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)初始状态：S 是已计算出最短路径的顶点集合，U 是未计算除最短路径的顶点的集合！
第 1 步：将顶点 D 加入到 S 中。
此时，S={D(0)}, U={A(∞),B(∞),C(3),E(4),F(∞),G(∞)}。 注:C(3)表示 C 到起点 D 的距离是 3。

第 2 步：将顶点 C 加入到 S 中。
上一步操作之后，U 中顶点 C 到起点 D 的距离最短；因此，将 C 加入到 S 中，同时更新 U 中顶点的距离。以顶点 F 为例，之前 F 到 D 的距离为 ∞；但是将 C 加入到 S 之后，F 到 D 的距离为 9=(F,C)+(C,D)。
此时，S={D(0),C(3)}, U={A(∞),B(23),E(4),F(9),G(∞)}。

第 3 步：将顶点 E 加入到 S 中。
上一步操作之后，U 中顶点 E 到起点 D 的距离最短；因此，将 E 加入到 S 中，同时更新 U 中顶点的距离。还是以顶点 F 为例，之前 F 到 D 的距离为 9；但是将 E 加入到 S 之后，F 到 D 的距离为 6=(F,E)+(E,D)。
此时，S={D(0),C(3),E(4)}, U={A(∞),B(23),F(6),G(12)}。

第 4 步：将顶点 F 加入到 S 中。
此时，S={D(0),C(3),E(4),F(6)}, U={A(22),B(13),G(12)}。

第 5 步：将顶点 G 加入到 S 中。
此时，S={D(0),C(3),E(4),F(6),G(12)}, U={A(22),B(13)}。

第 6 步：将顶点 B 加入到 S 中。
此时，S={D(0),C(3),E(4),F(6),G(12),B(13)}, U={A(22)}。

第 7 步：将顶点 A 加入到 S 中。
此时，S={D(0),C(3),E(4),F(6),G(12),B(13),A(22)}。

此时，起点 D 到各个顶点的最短距离就计算出来了：A(22) B(13) C(3) D(0) E(4) F(6) G(12)。
**代码说明：**
以"邻接矩阵"为例对迪杰斯特拉算法进行说明，对于"邻接表"实现的图在后面会给出相应的源码。

- 基本定义：

```c
class MatrixUDG {
    #define MAX    100
    #define INF    (~(0x1<<31))        // 无穷大(即0X7FFFFFFF)
    private:
        char mVexs[MAX];    // 顶点集合
        int mVexNum;             // 顶点数
        int mEdgNum;             // 边数
        int mMatrix[MAX][MAX];   // 邻接矩阵

    public:
        // 创建图(自己输入数据)
        MatrixUDG();
        // 创建图(用已提供的矩阵)
        //MatrixUDG(char vexs[], int vlen, char edges[][2], int elen);
        MatrixUDG(char vexs[], int vlen, int matrix[][9]);
        ~MatrixUDG();

        // 深度优先搜索遍历图
        void DFS();
        // 广度优先搜索（类似于树的层次遍历）
        void BFS();
        // prim最小生成树(从start开始生成最小生成树)
        void prim(int start);
        // 克鲁斯卡尔（Kruskal)最小生成树
        void kruskal();
        // Dijkstra最短路径
        void dijkstra(int vs, int vexs[], int dist[]);
        // 打印矩阵队列图
        void print();

    private:
        // 读取一个输入字符
        char readChar();
        // 返回ch在mMatrix矩阵中的位置
        int getPosition(char ch);
        // 返回顶点v的第一个邻接顶点的索引，失败则返回-1
        int firstVertex(int v);
        // 返回顶点v相对于w的下一个邻接顶点的索引，失败则返回-1
        int nextVertex(int v, int w);
        // 深度优先搜索遍历图的递归实现
        void DFS(int i, int *visited);
        // 获取图中的边
        EData* getEdges();
        // 对边按照权值大小进行排序(由小到大)
        void sortEdges(EData* edges, int elen);
        // 获取i的终点
        int getEnd(int vends[], int i);
};
```

MatrixUDG 是邻接矩阵对应的结构体。
mVexs 用于保存顶点，mVexNum 是顶点数，mEdgNum 是边数；mMatrix 则是用于保存矩阵信息的二维数组。例如，mMatrix[i][j]=1，则表示"顶点 i(即 mVexs[i])"和"顶点 j(即 mVexs[j])"是邻接点；mMatrix[i][j]=0，则表示它们不是邻接点。

---

- Dijkstra 算法

```c
/*
 * Dijkstra最短路径。
 * 即，统计图中"顶点vs"到其它各个顶点的最短路径。
 *
 * 参数说明：
 *       vs -- 起始顶点(start vertex)。即计算"顶点vs"到其它顶点的最短路径。
 *     prev -- 前驱顶点数组。即，prev[i]的值是"顶点vs"到"顶点i"的最短路径所经历的全部顶点中，位于"顶点i"之前的那个顶点。
 *     dist -- 长度数组。即，dist[i]是"顶点vs"到"顶点i"的最短路径的长度。
 */
void MatrixUDG::dijkstra(int vs, int prev[], int dist[])
{
    int i,j,k;
    int min;
    int tmp;
    int flag[MAX];      // flag[i]=1表示"顶点vs"到"顶点i"的最短路径已成功获取。

    // 初始化
    for (i = 0; i < mVexNum; i++)
    {
        flag[i] = 0;              // 顶点i的最短路径还没获取到。
        prev[i] = 0;              // 顶点i的前驱顶点为0。
        dist[i] = mMatrix[vs][i]; // 顶点i的最短路径为"顶点vs"到"顶点i"的权。
    }

    // 对"顶点vs"自身进行初始化
    flag[vs] = 1;
    dist[vs] = 0;

    // 遍历mVexNum-1次；每次找出一个顶点的最短路径。
    for (i = 1; i < mVexNum; i++)
    {
        // 寻找当前最小的路径；
        // 即，在未获取最短路径的顶点中，找到离vs最近的顶点(k)。
        min = INF;
        for (j = 0; j < mVexNum; j++)
        {
            if (flag[j]==0 && dist[j]<min)
            {
                min = dist[j];
                k = j;
            }
        }
        // 标记"顶点k"为已经获取到最短路径
        flag[k] = 1;

        // 修正当前最短路径和前驱顶点
        // 即，当已经"顶点k的最短路径"之后，更新"未获取最短路径的顶点的最短路径和前驱顶点"。
        for (j = 0; j < mVexNum; j++)
        {
            tmp = (mMatrix[k][j]==INF ? INF : (min + mMatrix[k][j]));
            if (flag[j] == 0 && (tmp  < dist[j]) )
            {
                dist[j] = tmp;
                prev[j] = k;
            }
        }
    }

    // 打印dijkstra最短路径的结果
    cout << "dijkstra(" << mVexs[vs] << "): " << endl;
    for (i = 0; i < mVexNum; i++)
        cout << "  shortest(" << mVexs[vs] << ", " << mVexs[i] << ")=" << dist[i] << endl;
}
```

**迪杰斯特拉算法的源码**
这里分别给出"邻接矩阵图"和"邻接表图"的迪杰斯特拉算法源码。
**1**. [邻接矩阵源码(MatrixUDG.cpp)](https://github.com/wangkuiwu/datastructs_and_algorithm/blob/master/source/graph/dijkstra/udg/cplus/MatrixUDG.cpp)
**2**. [邻接表源码(ListUDG.cpp)](https://github.com/wangkuiwu/datastructs_and_algorithm/blob/master/source/graph/dijkstra/udg/cplus/ListUDG.cpp)
