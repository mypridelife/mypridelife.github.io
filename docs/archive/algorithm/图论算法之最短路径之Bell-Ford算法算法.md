---
title: 图论算法之最短路径之 Bell-Ford 算法算法
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

**1、基本思想**
它是最优性原理的直接应用，算法基于以下事实：
（1）如果最短路径存在，则每个顶点最多经过一次，因此不超过 n-1 条边。
（2）长度为 k 的路径由长度为 k-1 的路加一条边得到。
（3）由最优性原理，只需依次考虑长度为 1,2，...，k-1 的最短路径。
**2、步骤**
对每条边边进行|V|-1 次 Relax(松弛)操作。
如果存在（u，v）属于 E，使得 dis[u]+w<dis[v],则存在负权回路；否则 dis[v]即为 s 到 v 的最短距离，pre[v]为前驱。
Bell-Ford 实质上就是一个迭代处理过程。
**3、样例代码**

```c
//Bellman-Ford map[i][j]==MaxInt means no direct path from i to j
void bellman_ford() {
	bool notfinish=false;
	memset(checked,0,sizeof(checked));
	checked[s]=true;
	for(k=0; k<n&&!notfinish; k++) {
		notfinish=true;
		for(i=0; i<n; i++) {

		}
	}
}
```
