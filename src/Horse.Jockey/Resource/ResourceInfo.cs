namespace Horse.Jockey.Resource
{
    internal class ResourceInfo
    {
        public string ResourceName { get; set; }
        public string VirtualPath { get; set; }
        public string Filename { get; set; }
        public string FileExtension { get; set; }
        public byte[] Data { get; set; }
    }
}