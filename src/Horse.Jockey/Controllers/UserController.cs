using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Threading.Tasks;
using Horse.Jockey.Models.User;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace Horse.Jockey.Controllers
{
    [ApiController]
    [Route("api/user")]
    public class UserController(JockeyOptions jockeyOptions, TokenValidationParameters parameters) : ControllerBase
    {
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] UserLogin login)
        {
            UserInfo info;
            if (jockeyOptions.AuthAsync == null)
                info = new UserInfo { Id = "0", Name = "Admin" };
            else
                info = await jockeyOptions.AuthAsync(login);

            if (info == null)
                return Ok(new LoginResult { Ok = false });

            List<Claim> tokenClaims = new List<Claim>();

            tokenClaims.Add(new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()));
            tokenClaims.Add(new Claim(JwtRegisteredClaimNames.Sub, login.Username));

            DateTime expiration = DateTime.Now.AddDays(1);
            SigningCredentials credentials = new SigningCredentials(parameters.IssuerSigningKey, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(parameters.ValidIssuer, parameters.ValidAudience, tokenClaims, expires: expiration, signingCredentials: credentials);
            string tokenString = new JwtSecurityTokenHandler().WriteToken(token);

            return Ok(new LoginResult { Ok = true, Token = tokenString });
        }
    }
}