use parking
go

create database parking;
go

create table Devices(
	[DeviceId] smallint primary key identity(1,1) not null,
	[Name] varchar(100) NOT NULL,
	[Status] smallint NOT NULL,
	[UpdateDate] smalldatetime,
)

--delete from dbo.Devices where dbo.Devices.DeviceId = 3;
--update Devices set Status = 0, UpdateDate = getdate() where [Name] = 'test'