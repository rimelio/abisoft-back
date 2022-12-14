USE [master]
GO
/****** Object:  Database [my_app]    Script Date: 9/20/2022 4:55:41 PM ******/
CREATE DATABASE [my_app]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'my_app', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\my_app.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'my_app_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\my_app_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [my_app] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [my_app].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [my_app] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [my_app] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [my_app] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [my_app] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [my_app] SET ARITHABORT OFF 
GO
ALTER DATABASE [my_app] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [my_app] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [my_app] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [my_app] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [my_app] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [my_app] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [my_app] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [my_app] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [my_app] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [my_app] SET  DISABLE_BROKER 
GO
ALTER DATABASE [my_app] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [my_app] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [my_app] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [my_app] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [my_app] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [my_app] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [my_app] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [my_app] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [my_app] SET  MULTI_USER 
GO
ALTER DATABASE [my_app] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [my_app] SET DB_CHAINING OFF 
GO
ALTER DATABASE [my_app] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [my_app] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [my_app] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [my_app] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [my_app] SET QUERY_STORE = OFF
GO
USE [my_app]
GO
/****** Object:  User [rimelio]    Script Date: 9/20/2022 4:55:41 PM ******/
CREATE USER [rimelio] WITHOUT LOGIN WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  Table [dbo].[accesory]    Script Date: 9/20/2022 4:55:41 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[accesory](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](20) NULL,
	[quantity] [int] NULL,
	[minQty] [int] NULL,
	[modelNumber] [int] NULL,
	[orderNumber] [int] NULL,
	[purchaseNumber] [int] NULL,
	[purchaseDate] [date] NULL,
	[purchaseCost] [decimal](18, 0) NULL,
	[notes] [varchar](50) NULL,
	[categoryId] [int] NULL,
	[locationId] [int] NULL,
	[companyId] [int] NULL,
	[manufacturerId] [int] NULL,
 CONSTRAINT [PK_accesory] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[category]    Script Date: 9/20/2022 4:55:41 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[category](
	[name] [nchar](25) NULL,
	[categoryTypeId] [int] NULL,
	[id] [int] IDENTITY(1,1) NOT NULL,
 CONSTRAINT [PK_catgory] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[categoryType]    Script Date: 9/20/2022 4:55:41 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[categoryType](
	[id] [int] NOT NULL,
	[name] [nchar](25) NULL,
 CONSTRAINT [PK_categoryType] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[city]    Script Date: 9/20/2022 4:55:41 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[city](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](25) NOT NULL,
	[countryId] [int] NOT NULL,
 CONSTRAINT [PK_city] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[company]    Script Date: 9/20/2022 4:55:41 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[company](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](25) NULL,
	[locationId] [int] NOT NULL,
 CONSTRAINT [PK_company] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[country]    Script Date: 9/20/2022 4:55:41 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[country](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](25) NULL,
 CONSTRAINT [PK_country] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[location]    Script Date: 9/20/2022 4:55:41 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[location](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](25) NULL,
	[zipCode] [int] NULL,
	[cityId] [int] NOT NULL,
 CONSTRAINT [PK_location] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[manufacturer]    Script Date: 9/20/2022 4:55:41 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[manufacturer](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](25) NULL,
 CONSTRAINT [PK_manufacturer] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[accesory]  WITH CHECK ADD  CONSTRAINT [FK_accesory_category] FOREIGN KEY([categoryId])
REFERENCES [dbo].[category] ([id])
GO
ALTER TABLE [dbo].[accesory] CHECK CONSTRAINT [FK_accesory_category]
GO
ALTER TABLE [dbo].[accesory]  WITH CHECK ADD  CONSTRAINT [FK_accesory_company] FOREIGN KEY([companyId])
REFERENCES [dbo].[company] ([id])
GO
ALTER TABLE [dbo].[accesory] CHECK CONSTRAINT [FK_accesory_company]
GO
ALTER TABLE [dbo].[accesory]  WITH CHECK ADD  CONSTRAINT [FK_accesory_location] FOREIGN KEY([locationId])
REFERENCES [dbo].[location] ([id])
GO
ALTER TABLE [dbo].[accesory] CHECK CONSTRAINT [FK_accesory_location]
GO
ALTER TABLE [dbo].[accesory]  WITH CHECK ADD  CONSTRAINT [FK_accesory_manufacturer] FOREIGN KEY([manufacturerId])
REFERENCES [dbo].[manufacturer] ([id])
GO
ALTER TABLE [dbo].[accesory] CHECK CONSTRAINT [FK_accesory_manufacturer]
GO
ALTER TABLE [dbo].[category]  WITH CHECK ADD  CONSTRAINT [FK_category_categoryType] FOREIGN KEY([categoryTypeId])
REFERENCES [dbo].[categoryType] ([id])
GO
ALTER TABLE [dbo].[category] CHECK CONSTRAINT [FK_category_categoryType]
GO
ALTER TABLE [dbo].[city]  WITH CHECK ADD  CONSTRAINT [FK_country] FOREIGN KEY([countryId])
REFERENCES [dbo].[country] ([id])
GO
ALTER TABLE [dbo].[city] CHECK CONSTRAINT [FK_country]
GO
ALTER TABLE [dbo].[company]  WITH CHECK ADD  CONSTRAINT [FK_company_location] FOREIGN KEY([locationId])
REFERENCES [dbo].[location] ([id])
GO
ALTER TABLE [dbo].[company] CHECK CONSTRAINT [FK_company_location]
GO
ALTER TABLE [dbo].[location]  WITH CHECK ADD  CONSTRAINT [FK_location_city] FOREIGN KEY([cityId])
REFERENCES [dbo].[city] ([id])
GO
ALTER TABLE [dbo].[location] CHECK CONSTRAINT [FK_location_city]
GO
USE [master]
GO
ALTER DATABASE [my_app] SET  READ_WRITE 
GO
