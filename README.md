## BugList

- [ ] 鼠标移出，应该可以用movein moveout 之类的 handler 解决

- [ ] 移动时没有代码，应该可以用 mouseup 是连续的 unmount mount 解决

- [ ] 同样的，height 的 local storage 改变引起了 bug， 可以用 unmount mount 解决

这部分的逻辑可以在 Editor WillReceiveProps 里面写？
