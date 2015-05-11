# GIT - Gandi SH

## Créer le dépôt

1. $ mkdir {vhost}
2. $ cd {vhost}
3. $ git init
4. $ git remote add origin ssh+git://{login}@git.dc2.gpaas.net/{vhost}.git
5. $ mkdir htdocs
6. $ echo "Hello world" > htdocs/index.html
7. $ git add htdocs
8. $ git commit -m "first version of index.html" htdocs
9. $ git push origin master

## Cloner le dépôt

1. $ git clone ssh+git://{login}@git.dc0.gpaas.net/{vhost}.git

git clone ssh+git://227223@git.dc2.gpaas.net/twolions.cepegra.be.git
git clone ssh+git://227224@git.dc2.gpaas.net/waterloop.cepegra.be.git
git clone ssh+git://227226@git.dc2.gpaas.net/operationanimalia.cepegra.be.git
git clone ssh+git://227227@git.dc2.gpaas.net/guly.cepegra.be.git


## Déployer

1. $ ssh {login}@git.dc2.gpaas.net 'deploy {vhost}.git'
