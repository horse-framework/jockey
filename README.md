# jockey
Web based administration library for Horse Messaging Queue Server


### Sample Usage

```C#
HorseServer server = new HorseServer();
HorseMq mq = server.UseHorseMq(cfg => cfg.UseJustAllowDeliveryHandler());
mq.AddJockey(o =>
{
    o.Port = 9998;
    o.AuthAsync = async login =>
    {
        if (login.Username == "admin" && login.Password == "Pa$$w0rd")
            return new UserInfo {Id = 123, Name = "Admin"};

        return null;
    };
});

server.Run(9999);    
```
