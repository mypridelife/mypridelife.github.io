---
title: 图论算法之最短路径之 Floyd 算法
date: 2018-09-09
#sidebar: 'auto'
categories:
  - Algorithm
#tags:
# -
#keys:
# - ''
#publish: true
---

**Floyd 算法：**
**1、基本思想**
求解所有点的路径需要进行 n 次试探。对于顶点 i 到顶点 j 的路径长度，首先考虑让路径经过顶点 1，比较路径（i，j）和（i，1，j）的长度取其短者为当前求得的最短路径长度。
Floyd 算法的本质是动态规划。递归方程如下：
dp[i]j][k]=min{dp[i][j][k-1],dp[i][k][k]+dp[k][j][k]}
特殊的有：
当 k=0 时，dp[i][j][0]=w(i,j)，其中 dp[i][j][k]表示从 i 到 j 经过 k 的最短路径。
**2、样例代码**

```c
//Floyd
viod Floyd() {
	for(iint i=0; i<sz; i++) {
		for(int j=0; j<sz; j++) {
			int i_distances[j][i]+distances[i][k];
			if(distances[j][k]>t_dis)
				distances[j][k]=t_dis;
		}
	}
}
```

**3、注意事项**
Floyd 可以处理负权边，但无法处理负环。
Floyd 算法适用于无向图，有向图，此时一个无向边次相当于两个有向边。
求出全源最短路径的计算复杂度为*O*（n<sup>3</sup>）。
