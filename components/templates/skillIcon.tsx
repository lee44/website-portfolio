import React from 'react'
import { FaAndroid, FaBootstrap, FaChartLine, FaCode, FaCogs, FaCss3, FaDatabase, FaFileAlt, FaGithub, FaHtml5, FaJava, FaKey, FaLock, FaPython, FaReact, FaRobot, FaSass, FaSearch, FaServer, FaShieldAlt, } from 'react-icons/fa'
import { DiPhotoshop } from 'react-icons/di'
import { SiAzuredevops, SiAzurefunctions, SiDocker, SiFastapi, SiGithubactions, SiJquery, SiJson, SiMicrosoftazure, SiMicrosoftsqlserver, SiMysql, SiOpenai, SiReact, SiJavascript, SiTypescript } from 'react-icons/si'
import { SiTailwindcss } from 'react-icons/si'


export default function SkillIcon({ name, color }) {
  const size = 42
  const icons = {
    HTML5: <FaHtml5 size={size} color={color} />,
    CSS: <FaCss3 size={size} color={color} />,
    SASS: <FaSass size={size} color={color} />,
    Javascript: <SiJavascript size={size} color={color} />,
    JavaScript: <SiJavascript size={size} color={color} />,
    TypeScript: <SiTypescript size={size} color={color} />,
    SQL: <SiMicrosoftsqlserver size={size} color={color} />,
    JQuery: <SiJquery size={size} color={color} />,
    Bootstrap: <FaBootstrap size={size} color={color} />,
    MySQL: <SiMysql size={size} color={color} />,
    'Crystal Reports': <FaHtml5 size={size} color={color} />,
    TailwindCSS: <SiTailwindcss size={size} color={color} />,
    Java: <FaJava size={size} color={color} />,
    Android: <FaAndroid size={size} color={color} />,
    Python: <FaPython size={size} color={color} />,
    Photoshop: <DiPhotoshop size={size} color={color} />,
    Git: <FaGithub size={size} color={color} />,
    ReactJS: <FaReact size={size} color={color} />,
    'React.js': <SiReact size={size} color={color} />,
    'CSS3': <FaCss3 size={size} color={color} />,
    'Azure OpenAI Service': <SiOpenai size={size} color={color} />,
    'GPT Models': <FaRobot size={size} color={color} />,
    'Generative AI': <FaRobot size={size} color={color} />,
    'LLM Integration': <FaCogs size={size} color={color} />,
    'Prompt Engineering': <FaCode size={size} color={color} />,
    'Function Calling': <FaCode size={size} color={color} />,
    'Retrieval-Augmented Generation': <FaSearch size={size} color={color} />,
    'Azure AI Search': <FaSearch size={size} color={color} />,
    'Vector Search': <FaSearch size={size} color={color} />,
    'Semantic Search': <FaSearch size={size} color={color} />,
    'Hybrid Search': <FaSearch size={size} color={color} />,
    Embeddings: <FaDatabase size={size} color={color} />,
    'Document Chunking': <FaFileAlt size={size} color={color} />,
    'Azure App Service': <SiMicrosoftazure size={size} color={color} />,
    'Azure Functions': <SiAzurefunctions size={size} color={color} />,
    'Azure Blob Storage': <SiMicrosoftazure size={size} color={color} />,
    'Azure Cosmos DB': <SiMicrosoftazure size={size} color={color} />,
    'Azure SQL Database': <SiMicrosoftsqlserver size={size} color={color} />,
    'Azure API Management': <SiMicrosoftazure size={size} color={color} />,
    'Azure Key Vault': <FaKey size={size} color={color} />,
    'Python FastAPI': <SiFastapi size={size} color={color} />,
    'RESTful APIs': <FaServer size={size} color={color} />,
    JSON: <SiJson size={size} color={color} />,
    'Microsoft Entra ID': <FaShieldAlt size={size} color={color} />,
    'OAuth 2.0': <FaLock size={size} color={color} />,
    'Managed Identity': <FaKey size={size} color={color} />,
    'Role-Based Access Control (RBAC)': <FaShieldAlt size={size} color={color} />,
    'Azure DevOps': <SiAzuredevops size={size} color={color} />,
    'GitHub Actions': <SiGithubactions size={size} color={color} />,
    Docker: <SiDocker size={size} color={color} />,
    'CI/CD Pipelines': <FaCogs size={size} color={color} />,
    'Azure Monitor': <SiMicrosoftazure size={size} color={color} />,
    'Application Insights': <FaChartLine size={size} color={color} />,
    'Log Analytics': <FaChartLine size={size} color={color} />,
    'LLM Evaluation': <FaChartLine size={size} color={color} />,
  }

  return (
    <>
      <li className='flex flex-col items-center justify-center'>
        {icons[name] || <span className='flex h-[42px] w-[42px] items-center justify-center rounded-full border text-xs font-bold'>SK</span>}
        <p className='m-2'>{name}</p>
      </li>
    </>
  )
}
