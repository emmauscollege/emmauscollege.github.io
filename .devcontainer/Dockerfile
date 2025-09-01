FROM ubuntu:22.04

# Basis packages
RUN apt-get update && apt-get install -y \
    curl git build-essential file && \
    rm -rf /var/lib/apt/lists/*

# Homebrew installeren (Linuxbrew)
RUN git clone https://github.com/Homebrew/brew /home/linuxbrew/.linuxbrew/Homebrew && \
    mkdir /home/linuxbrew/.linuxbrew/bin && \
    ln -s ../Homebrew/bin/brew /home/linuxbrew/.linuxbrew/bin/ && \
    echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"' >> /etc/bash.bashrc

ENV PATH="/home/linuxbrew/.linuxbrew/bin:/home/linuxbrew/.linuxbrew/sbin:${PATH}"
