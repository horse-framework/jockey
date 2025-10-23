using System.Collections.Generic;
using System.Text.Json.Serialization;
using Horse.WebSocket.Protocol;
using Newtonsoft.Json;

namespace Horse.Jockey.Models
{
	[TextMessageType("router-info")]
	internal class RouterInfo
	{
		[JsonProperty("name")]
		[JsonPropertyName("name")]
		public string Name { get; set; }

		[JsonProperty("enabled")]
		[JsonPropertyName("enabled")]
		public bool IsEnabled { get; set; }

		[JsonProperty("method")]
		[JsonPropertyName("method")]
		public string Method { get; set; }

		[JsonProperty("bindings")]
		[JsonPropertyName("bindings")]
		public IEnumerable<BindingInfo> Bindings { get; set; }
	}
}