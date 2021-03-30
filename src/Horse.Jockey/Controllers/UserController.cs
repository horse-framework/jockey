using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using Horse.Jockey.Models.User;
using Horse.Mvc;
using Horse.Mvc.Auth.Jwt;
using Horse.Mvc.Controllers;
using Horse.Mvc.Controllers.Parameters;
using Horse.Mvc.Filters.Route;

namespace Horse.Jockey.Controllers
{
    [Route("api/user")]
    internal class UserController : HorseController
    {
        private readonly JockeyOptions _jockeyOptions;
        private readonly IJwtProvider _jwtProvider;

        public UserController(JockeyOptions jockeyOptions, IJwtProvider jwtProvider)
        {
            _jockeyOptions = jockeyOptions;
            _jwtProvider = jwtProvider;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] UserLogin login)
        {
            UserInfo info;
            if (_jockeyOptions.AuthAsync == null)
                info = new UserInfo {Id = "0", Name = "Admin"};
            else
                info = await _jockeyOptions.AuthAsync(login);

            if (info == null)
                return await JsonAsync(new LoginResult {Ok = false});

            List<Claim> claims = new List<Claim>();
            claims.Add(new Claim("name", info.Name));
            JwtToken token = _jwtProvider.Create(info.Id, info.Name, claims);
            return await JsonAsync(new LoginResult {Ok = true, Token = token.Token});
        }
    }
}