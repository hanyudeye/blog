---
layout: default
toc: false
title: Scoop
date:  2025-01-02T10:22:54+08:00
categories: ['']
---
 
**Scoop** 是一个适用于 Windows 的命令行包管理器，类似于 Linux 系统中的 `apt` 或 `yum`，它通过命令行轻松地管理和安装各种开源软件。


### 1. **Scoop 的工作原理**
Scoop 提供了一种简化的方式来安装和管理 Windows 上的程序。它不会像传统的 Windows 安装方式那样使用 `.exe` 安装程序，而是通过预先打包好的**应用程序版本**，使得安装过程更加轻量、便捷。

Scoop 的一个关键特点是它不涉及**系统级的配置**（如修改注册表或环境变量），这使得它对于开发者和有特殊需求的用户来说非常方便。

### 2. **Scoop 的优点**
- **简洁**：Scoop 通过命令行管理应用程序，非常适合喜欢用命令行操作的用户。
- **轻便**：它不使用传统的安装程序，而是直接安装压缩包或便携版本，减少了安装过程的复杂性。
- **易于更新**：Scoop 提供了便捷的命令来更新已安装的软件。
- **无依赖**：许多程序都可以直接使用，没有像某些传统安装包那样依赖其他工具或配置。
- **支持很多常用工具**：Scoop 提供了对多种开发工具和程序的支持，包括 Git、Node.js、Python、VS Code 等。


### 3. **安装 Scoop**
要使用 Scoop，首先需要安装它。安装过程相对简单，按以下步骤操作：

#### 安装步骤：
1. **打开 PowerShell**：
   - 在 Windows 上，按 `Win + X` 然后选择“Windows PowerShell（管理员）”。
   
2. **启用执行策略**：
   执行以下命令以允许脚本在 PowerShell 中运行：
   ```powershell
   Set-ExecutionPolicy RemoteSigned -scope CurrentUser
   ```

3. **安装 Scoop**：
   使用以下命令来安装 Scoop：
   ```powershell
   iwr -useb get.scoop.sh | iex
   ```

   这个命令会通过 PowerShell 下载并运行 Scoop 的安装脚本。

4. **确认安装**：
   安装完成后，可以运行以下命令确认 Scoop 是否成功安装：
   ```powershell
   scoop --version
   ```

### 4. **安装 Windows 程序**
通过 Scoop 安装程序非常简单，只需使用以下命令格式：

```powershell
scoop install <应用程序名称>
```

例如，安装 **Google Chrome** 浏览器：

```powershell
scoop install googlechrome
```

安装 **Visual Studio Code**：

```powershell
scoop install vscode
```

### 5. **管理已安装的程序**
- **查看已安装的程序**：
   ```powershell
   scoop list
   ```

- **更新已安装的软件**：
   Scoop 支持一键更新所有已安装的软件：
   ```powershell
   scoop update *
   ```

- **卸载程序**：
   如果想要卸载某个程序，可以使用以下命令：
   ```powershell
   scoop uninstall <应用程序名称>
   ```

### 6. **Scoop 的限制**
虽然 Scoop 提供了便捷的程序安装方法，但也有一些局限性：
- 仅支持通过**命令行**操作，不适合不熟悉命令行的用户。
- 主要针对开源或便携版本的程序，某些商业软件可能无法通过 Scoop 安装。
- 默认情况下，Scoop 安装的应用程序不进行系统级的配置，因此需要用户自行配置一些应用程序的环境变量等。

### 7. **总结**
Scoop 是一个轻量且高效的 Windows 包管理工具，特别适合开发者和喜欢使用命令行的用户。通过 Scoop，用户可以方便地安装和管理各种常见软件，无需繁琐的图形界面安装程序。它特别适合开源软件和开发工具的安装，对于需要频繁安装、卸载和更新软件的用户非常有帮助。


 
在使用 **Scoop** 时，你可以通过配置 `Scoop` 来指定软件的安装目录。默认情况下，Scoop 会将所有程序安装在 `%USERPROFILE%\scoop` 目录下（即通常是 `C:\Users\<YourUsername>\scoop`），但你可以更改这个安装目录。

### 1. **修改 Scoop 的安装路径**
要将 Scoop 安装目录设置到自定义位置，可以通过以下步骤进行设置：

#### 1.1 设置 `SCOOP` 环境变量

在安装 Scoop 之后，可以设置一个新的环境变量来指定你希望的安装目录。

1. **打开 PowerShell**（管理员模式）。
2. **创建一个新的目录**，例如你想将 Scoop 安装到 `D:\scoop` 目录：
   ```powershell
   mkdir D:\scoop
   ```
3. **设置 `SCOOP` 环境变量**：
   使用以下命令将 `SCOOP` 环境变量指向你自定义的目录：
   ```powershell
   [System.Environment]::SetEnvironmentVariable('SCOOP', 'D:\scoop', [System.EnvironmentVariableTarget]::User)
   ```

4. **重新加载 PowerShell 环境**（或关闭并重新打开 PowerShell）。
   
   之后，Scoop 会将安装的软件存储在 `D:\scoop` 路径下。

### 2. **指定 Scoop 程序安装目录**

如果你希望将 **程序安装到指定目录**（而不仅仅是改变 Scoop 的根目录），你可以为每个程序自定义安装路径。

#### 2.1 创建自定义安装路径

你可以创建一个自定义的程序安装目录，并告诉 Scoop 使用这个路径。可以通过以下步骤实现：

1. **修改 `SCOOP` 配置**：
   打开 PowerShell，然后使用以下命令来指定你希望安装程序的目录：
   ```powershell
   scoop config SCOOP_GLOBAL D:\scoop
   scoop config SCOOP_PORTABLE D:\scoop
   ```

   这将设置 `SCOOP` 根目录到 `D:\scoop`，并指定安装程序的路径为 `D:\scoop`。

#### 2.2 设置默认的应用程序存储目录
Scoop 支持将应用程序存储在不同的目录。你可以通过设置 `SCOOP_USER` 和 `SCOOP_GLOBAL` 配置来管理它。

```powershell
scoop config SCOOP_USER 'D:\scoop_apps'
```

将程序安装到 `D:\scoop_apps`，这会把程序存储目录指定为 `D:\scoop_apps`。

### 3. **总结**

通过设置环境变量和配置文件，Scoop 可以让你将程序安装到你指定的目录。这对于需要更细粒度控制安装位置，或者在磁盘空间有限的情况下将程序安装到其他盘符的人来说非常有用。

1. 通过设置 `SCOOP` 环境变量可以改变 Scoop 的根目录。
2. 通过配置 `SCOOP_USER` 或 `SCOOP_GLOBAL` 可以指定程序的安装目录。

完成这些配置后，Scoop 将把所有软件安装到你指定的目录，确保更好地管理磁盘空间。


## 更换scoop的repo地址
scoop config SCOOP_REPO "https://gitee.com/scoop-installer/scoop"
## 拉取新库地址
scoop update

## 安装其他版本
``` sh
scoop bucket add versions # add the 'versions' bucket if you haven't already

scoop install python27 python
python --version # -> Python 3.6.2

# switch to python 2.7.x
scoop reset python27
python --version # -> Python 2.7.13

# switch back (to 3.x)
scoop reset python
python --version # -> Python 3.6.2
```