import os, subprocess, json, io, shutil
user = {}
repos=None
with open('./repos.json', 'r') as f:
  repos = json.load(f)
def initRepos(repos, command, isPull = False):
  global user
  for repo in repos:
    if (isPull):
      if(os.path.exists(repo)):
        print('already exists', repo)
        os.chdir(repo)
        os.system('git pull')
      else:
        clone = 'git clone ' + repos[repo]
        os.system(clone)
        os.chdir(repo)
    else:
      os.chdir(repo)
    commitBytes = subprocess.check_output(command, shell=True)
    commitList = commitBytes.decode()
    commitList = str(*commitList.split('\\n'))
    x=''
    arr=[]
    for i in commitList:
      if i == '\n':
        arr.append(x.strip())
        x=''
      else:
        x+=i
    for x in arr:
      count, name = x.split('\t')
      user[name] = user.get(name, int(count)) + int(count)
    os.chdir('..')
    # print(user)

allBranch = 'git shortlog --summary --numbered --all --no-merges --since="Oct 10 2022"'
baseBranch = 'git shortlog -sn --since="Oct 10 2022"'
initRepos(repos, allBranch, False)

users = sorted(user.items(), key=lambda x:x[1], reverse=True)
print('-----------final-----------')
for u in users:
  print(*u)