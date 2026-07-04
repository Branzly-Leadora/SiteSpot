# Moneyloop overnight burst — invoked by Task Scheduler (task name: moneyloop).
# One burst = one lead end to end (see task.md). Log goes next to the queue.
Set-Location C:\Users\ROG\Desktop\projekt\sitespot
$task = Get-Content moneyloop\task.md -Raw
claude -p $task --allowedTools "Read,Write,Edit,Bash" --permission-mode acceptEdits *> moneyloop\queue\last-burst.log
