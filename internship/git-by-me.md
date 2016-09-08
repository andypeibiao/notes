git status
git diff
git add
git commit -m "add rising people API"
git push
git commit -v
git remote -v
git branch
git pull upstream develop
git remote remove https://github.com/lyfeyaj/sublime-text-imfixupstream
git loghttps://github.com/lyfeyaj/sublime-text-imfix

# pull
git branch -a
git merge upstream/develop
git push

➜  tadmin git:(develop) git branch -v -a
* develop                              5e06300 Merge branch 'master' into develop
  remotes/origin/HEAD                  -> origin/develop
  remotes/origin/develop               5e06300 Merge branch 'master' into develop
  remotes/origin/feature/rising_people 493decf add rising people API
  remotes/origin/master                00b0743 Merge pull request #89 from augmn/release/2.0.26
  remotes/upstream/develop             5e06300 Merge branch 'master' into develop
  remotes/upstream/master              eacc612 Merge pull request #94 from augmn/hotfix/2.0.11




## demo
➜  tbiz git:(feature/rising_people) ✗ git push
fatal: The current branch feature/rising_people has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin feature/rising_people
