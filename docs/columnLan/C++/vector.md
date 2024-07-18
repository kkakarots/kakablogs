# C++ vector 容器
C++ 中的 vector 是一种序列容器，它允许你在运行时动态地插入和删除元素。

**基本特性:**
- 动态大小：vector 的大小可以根据需要自动增长和缩小。
- 连续存储：vector 中的元素在内存中是连续存储的，这使得访问元素非常快速。
- 可迭代：vector 可以被迭代，你可以使用循环（如 for 循环）来访问它的元素。
- 元素类型：vector 可以存储任何类型的元素，包括内置类型、对象、指针等。

| 功能        |      示例      | 
| ------------- | ------------- | 
| 添加元素 | `mVector.push_back(7`) |
| 访问元素 |   `mVector[1] / mVector.at(1)` |
| 获取大小 |   `mVector.size()`  |
| 迭代访问 |   `for (auto it = mVector.begin(); it != mVector.end(); ++it) {cout << *it << endl}` |
| 范围循环 |   `for (int element : mVector)`    |
| 删除元素 |   `mVector.erase(mVector.begin() + 2)`    |
| 清空 |   `mVector.clear()`    |